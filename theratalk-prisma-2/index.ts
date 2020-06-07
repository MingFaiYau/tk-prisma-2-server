import { GraphQLServer } from "graphql-yoga";
import { createContext } from "./src/context";
import { permissions } from "./src/permissions";
import { schema } from "./src/schema";

new GraphQLServer({
  schema,
  context: createContext,
  middlewares: [permissions],
}).start(() =>
  console.log(
    `🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-auth#using-the-graphql-api`
  )
);
