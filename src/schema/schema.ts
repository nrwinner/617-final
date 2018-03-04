const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

import { UserSchema } from './user.schema';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: UserSchema.user,
    users: UserSchema.users
  }
})

// Mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: UserSchema.addUser,
    deleteUser: UserSchema.deleteUser,
    updateUser: UserSchema.updateUser
  }
})


const AppSchema = new GraphQLSchema({
  query: RootQuery,
  mutation
})

export { AppSchema }