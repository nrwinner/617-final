"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_interactor_1 = require("../interactors/user.interactor");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } = require('graphql');
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString }
    })
});
class UserSchema {
    constructor(dataStore) {
        this.dataStore = dataStore;
        this.user = {
            type: UserType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                return user_interactor_1.getUser(dataStore, args.id);
            }
        };
        this.users = {
            type: new GraphQLList(UserType),
            resolve(parentValue, args) {
                return user_interactor_1.getUsers(dataStore);
            }
        };
        this.addUser = {
            type: UserType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parentValue, args) {
                // Call interactor here to handle business logic
                return user_interactor_1.addUser(dataStore, args.name);
            }
        };
        this.deleteUser = {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parentValue, args) {
                // Call interactor here to handle business logic
                return user_interactor_1.deleteUser(dataStore, args.id);
            }
        };
        this.updateUser = {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                name: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                // Call interactor here to handle business logic
                return user_interactor_1.updateUser(dataStore, args.id, args.name);
            }
        };
    }
}
exports.UserSchema = UserSchema;
