import { gql } from 'apollo-server';

/*
{
"id": "342",
"title": "Maiores ex tempore quo qui.",
"body": "Earum natus quis possimus iusto voluptatem dicta. Facilis voluptate minima architecto similique quas. Tempora illum omnis aut et id minima nihil itaque quo. Dicta ratione ut voluptates quia harum voluptates qui.\n \rVoluptas velit qui eum sit voluptatem animi aut provident enim. Sed magnam reiciendis. Natus et fugit omnis quaerat iusto iste aliquam dignissimos magnam.",
"userId": "115",
"indexRef": 4,
"createdAt": "2016-06-05T20:17:46.223Z"
}, */

export const postType = gql`
  extend type Query {
    post: Post!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    # user: User!
    indexRef: Int!
    createdAt: String!
  }
`;
