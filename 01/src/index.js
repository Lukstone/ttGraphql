import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID!
      name: String
      age: Int!
      average: Float!
      married: Boolean!
      arrayString: [String!]!
    }
  `,
  resolvers: {
    Query: {
      id: () => '123123-a',
      name: () => 'John Doe',
      age: () => 30,
      average: () => 7.5,
      married: () => true,
      arrayString: () => ['a', 'b', 'c'],
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server is running on url ${url}`);
});
