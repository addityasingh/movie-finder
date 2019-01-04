import micro, { send } from 'micro';
import { ApolloServer, gql } from 'apollo-server-micro';
import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers/movie';
import typeDefs from './typedefs';

// const schema = makeExecutableSchema({
//   resolvers,
//   typeDefs
// });

const apolloServer = new ApolloServer({ typeDefs, resolvers });
module.exports = apolloServer.createHandler({ path: '/data' });