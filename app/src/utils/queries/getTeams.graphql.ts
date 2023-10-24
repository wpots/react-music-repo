const getTeamsQuery = `
{
  __typename
  teamCollection(limit: 10) {
    items {
      responsibilities {
        json
      }
      name
      membersCollection(limit: 5) {
        items {
          firstName
        }
      }
      email
    }
  }
}

`;

export default getTeamsQuery;
