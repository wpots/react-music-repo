import "server-only"; // give developers build time error when importing in Client Component
import getTeamsQuery from "./queries/getTeams.graphql";
import getEventsQuery from "./queries/getEvents.graphql";

const resolveCollections = (dto: Record<any, any>) => {
  for (const key in dto) {
    const value = dto[key];
    if (key.includes("Collection")) {
      const newKey = key.replace("Collection", "");
      delete dto[key];
      const newValue = (value?.items?.length > 0 && value.items.map((i: any) => resolveCollections(i))) ?? null;
      dto[newKey] = newValue;
    }
  }
  return dto;
};

const contentService = {
  getContentQuery: {
    team: getTeamsQuery as WebGLQuery,
    event: getEventsQuery as WebGLQuery,
  },
  contentUri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
  async fetchContentCollection(type: string, variables?: Record<any, any>) {
    console.log(variables);
    try {
      const data = await fetch(this.contentUri, {
        method: "POST",
        body: JSON.stringify({
          query: this.getContentQuery[type as keyof typeof this.getContentQuery],
          variables,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
      });
      let response = await data.json();
      if (response.errors) throw new Error(JSON.stringify(response) || "no correct response");
      if (type) response = this.mapContentCollection({ data: response.data, type });

      return response;
    } catch (error) {
      console.log(error);
    }
  },
  mapContentCollection({ data, type }: { data: any; type: string }) {
    return data[`${type}Collection`]?.items?.map((i: Record<any, any>) => resolveCollections(i));
  },
};

export default contentService;
