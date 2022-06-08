import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

import { addCoin, getAllCoins, getCoinById } from "./coins.mjs";

const schema = buildSchema(`
    type Query {
        coin(id: Int): Coin
        allCoins: [Coin]
    }

    type Coin {
        id: Int!
        data: String
    }

    type Mutation {
        addCoin(data: String): Boolean
    }
`);

const rootValue = {
  coin: ({ id }) => getCoinById(id),
  addCoin: ({ data }) => addCoin(data),
  allCoins: () => getAllCoins()
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
  })
);

app.listen(4000);

console.log("GraphQL running on port 4000");
