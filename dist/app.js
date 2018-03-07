"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var graphqlHTTP = require('express-graphql');
const schema_1 = require("./schema/schema");
const json_store_1 = require("./drivers/json-store");
var app = express();
const dataStore = new json_store_1.JsonStore();
app.use('/graphql', graphqlHTTP({
    schema: schema_1.SchemaBuilder.buildSchema(dataStore),
    graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
