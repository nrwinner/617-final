"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } = require('graphql');
const user_schema_1 = require("./user.schema");
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: user_schema_1.UserSchema.user,
        users: user_schema_1.UserSchema.users
    }
});
// Mutations
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: user_schema_1.UserSchema.addUser,
        deleteUser: user_schema_1.UserSchema.deleteUser,
        updateUser: user_schema_1.UserSchema.updateUser
    }
});
const AppSchema = new GraphQLSchema({
    query: RootQuery,
    mutation
});
exports.AppSchema = AppSchema;
