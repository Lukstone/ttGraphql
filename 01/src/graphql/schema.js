import { gql } from 'apollo-server';
import { userType } from './user/types';
import { userResolvers } from './user/resolvers';
import { postType } from './post/types';
import { postResolvers } from './post/resolvers';

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },
};

export const typeDefs = [rootTypeDefs, userType, postType];
export const resolvers = [rootResolvers, userResolvers, postResolvers];
