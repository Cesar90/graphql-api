import { createServer } from "http";
import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import {
  ApolloServerPluginLandingPageGraphQLPlayground
} from "apollo-server-core";

// 1
const startServer = async () => {

  // 2
  const app = express()
  const httpServer = createServer(app)

  // 3
  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;

  // 4
  const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
  };

  // 5
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  })

  // 6
  await apolloServer.start()

  // 7
  apolloServer.applyMiddleware({
      app,
      path: '/api'
  })

  // 8
  httpServer.listen({ port: process.env.PORT || 4000 }, () =>
    console.log(`Server listening on localhost:4000${apolloServer.graphqlPath}`)
  )
}

startServer()