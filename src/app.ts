var express = require('express');
var graphqlHTTP = require('express-graphql');

import { SchemaBuilder } from "./schema/schema";
import { JsonStore } from './drivers/json-store';

var app = express();

const dataStore = new JsonStore();

app.use('/graphql', graphqlHTTP({
  schema: SchemaBuilder.buildSchema(dataStore),
  graphiql: true,
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
