import {gql} from 'graphql-tag';
const getEventsQuery = `
 {
  eventCollection(where: {isConcert: false}, limit: 20) {
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