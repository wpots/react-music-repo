import { gql } from 'graphql-tag';

const resolveCollections = (dto: Record<any,any>) => {
  for (const key in dto) {
      const value = dto[key];
      if (key.includes('Collection')) {
        const newKey = key.replace('Collection', '');
        delete dto[key];
        const newValue = (value?.items?.length > 0 && value.items) ?? null;
        dto[newKey] = newValue;
      }
  }
  return dto;
}


const contentService = {
  contentUri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
  async fetchContent(query:WebGLQuery, variables?:Record<any,any>, mapper?:string) {
    try {
      const data = await fetch(this.contentUri, {
        method:'POST',
        body:JSON.stringify({query,variables}),
              headers:{
          'Content-Type' : 'application/json',
          'Authorization': `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
        }
      })
      let response = await data.json();
      if(mapper) response = this.mappers[mapper]?.(response);
      
      return response;
    } catch (error) {
      console.log(error)
      throw new Error('Failed to fetch content')
    }
    
  },
  mappers: {
    mapEvents({data}:{data:Record<any,any>}) {
      return data.eventCollection.items;
    }
  } as Record<any, any>

}

export default contentService;