"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } = require('graphql');
const user_schema_1 = require("./user.schema");
class SchemaBuilder {
    static buildSchema(dataStore) {
        const userSchema = new user_schema_1.UserSchema(dataStore);
        const RootQuery = new GraphQLObjectType({
            name: 'RootQueryType',
            fields: {
                user: userSchema.user,
                users: userSchema.users
            }
        });
        const mutation = new GraphQLObjectType({
            name: 'Mutation',
            fields: {
                addUser: userSchema.addUser,
                deleteUser: userSchema.deleteUser,
                updateUser: userSchema.updateUser
            }
        });
        return new GraphQLSchema({
            query: RootQuery,
            mutation
        });
    }
}
exports.SchemaBuilder = SchemaBuilder;
