import { ApolloServer } from "apollo-server";
import typeDefs from "./Schema/schema.js";
import resolvers from "./resolver/resolver.js";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
