"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } = require('graphql');
const axios = require('axios');
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString }
    })
});
const UserSchema = {
    user: {
        type: UserType,
        args: {
            id: { type: GraphQLString }
        },
        resolve(parentValue, args) {
            return axios.get(`http://localhost:3000/users/${args.id}`)
                .then(res => res.data);
        }
    },
    users: {
        type: new GraphQLList(UserType),
        resolve(parentValue, args) {
            return axios.get(`http://localhost:3000/users`)
                .then(res => res.data);
        }
    },
    addUser: {
        type: UserType,
        args: {
            name: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve(parentValue, args) {
            // Call interactor here to handle business logic
            return axios.post('http://localhost:3000/users', {
                name: args.name
            }).then(res => res.data);
        }
    },
    deleteUser: {
        type: UserType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve(parentValue, args) {
            // Call interactor here to handle business logic
            return axios.delete('http://localhost:3000/users/' + args.id)
                .then(res => res.data);
        }
    },
    updateUser: {
        type: UserType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLString) },
            name: { type: GraphQLString }
        },
        resolve(parentValue, args) {
            // Call interactor here to handle business logic
            return axios.patch('http://localhost:3000/users/' + args.id, args)
                .then(res => res.data);
        }
    }
};
exports.UserSchema = UserSchema;
