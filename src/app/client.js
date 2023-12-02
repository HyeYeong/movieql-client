import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const SERVER_URL = 'https://flyby-router-demo.herokuapp.com/'
const client = new ApolloClient({
  uri: SERVER_URL,
  cache: new InMemoryCache(),
});

client.query({
    query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
  }).then((result) => console.log(result));

export default client;