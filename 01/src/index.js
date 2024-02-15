import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      userName: String!
    }
  `,
  resolvers: {
    Query: {
      user() {
        return {
          id: '1sadasd',
          userName: 'John Doe',
        };
      },
      users() {
        return [
          {
            id: '1sadasd',
            userName: 'John Doe',
          },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server is running on url ${url}`);
});
