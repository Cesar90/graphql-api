import { createServer } from "http";
import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import dotenv from 'dotenv'
dotenv.config()
import { connectDatabase } from './database'
import { typeDefs, resolvers } from './graphql'

const startServer = async () => {
  const db = await connectDatabase()
  const app = express()
  const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    introspection: true,
    playground: true, 
    context: () => ({ db }) });
  server.applyMiddleware({ app, path: '/api' })
  app.listen(process.env.PORT)
  console.log(`[app]:http://localhost:${process.env.PORT}`)



  // const db = await connectDatabase()
  // // console.log(db)
  // const app = express()
  // const httpServer = createServer(app)

  // // const typeDefs = gql`
  // //   type Query {
  // //     hello: String
  // //   }
  // // `;

  // // const resolvers = {
  // //   Query: {
  // //     hello: () => 'Hello world!',
  // //   },
  // // };

  // const apolloServer = new ApolloServer({
  //   typeDefs,
  //   resolvers,
  //   context: () => {({ db })},
  // })

  // // await apolloServer.start()
  // apolloServer.applyMiddleware({
  //     app,
  //     path: '/api'
  // })
  
  // httpServer.listen({ port: process.env.PORT || 4000 }, () =>
  //   console.log(`Server listening on localhost:4000${apolloServer.graphqlPath}`)
  // )
}

startServer()