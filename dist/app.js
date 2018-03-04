"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var graphqlHTTP = require('express-graphql');
const schema_1 = require("./schema/schema");
var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema_1.AppSchema,
    graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
