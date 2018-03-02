var express = require('express');
var graphqlHTTP = require('express-graphql');

var schema = require('./schema/schema')

var app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
