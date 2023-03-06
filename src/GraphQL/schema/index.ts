import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from'@GraphQL/resolvers';
import Test from '@GraphQL/schema/Test.gql';

// The GraphQL schema
const rootTypes = `
  type Query {
    test: Test
  }
  type Mutation {
      testMutation: TestMutation
  }
`;

const typeDefs = [ rootTypes, Test ];

export default makeExecutableSchema({typeDefs, resolvers});