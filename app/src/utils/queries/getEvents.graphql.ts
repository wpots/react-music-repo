import { SongDTO } from "./getSongs.graphql";

export type EventDTO = {
  title: string;
  date: Date | string;
  venue?: string;
  location?: { lon: string; lat: string };
  description?: string;
  repertoireListCollection?: {
    items: SongDTO[];
  };
};

const getEventsQuery = `
 query getEvents($date:DateTime!) {
  eventCollection(where: {isConcert: false, AND:{date_gte: $date}}, limit: 20, order: date_ASC) {
    items {
      date
      venue
      location {
        lat
        lon
      }
      description
      title
      repertoireListCollection(limit: 12) {
        items {
          a1Collection(limit: 6) {
            items {
              firstName
            }
          }
          a2Collection(limit: 6) {
            items {
              firstName
            }
          }
          title
          googleDriveLink
        }
      }
    }
  }
}`;
export default getEventsQuery;
