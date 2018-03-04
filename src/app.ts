var express = require('express');
var graphqlHTTP = require('express-graphql');

import { AppSchema } from "./schema/schema";

var app = express();

app.use('/graphql', graphqlHTTP({
  schema: AppSchema,
  graphiql: true,
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
