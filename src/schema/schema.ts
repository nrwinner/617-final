const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

import { UserSchema } from './user.schema';
// FIXME: get from index
import { DataStore } from '../interfaces/DataStore';

export class SchemaBuilder {

  public static buildSchema(dataStore: DataStore) {
    const userSchema = new UserSchema(dataStore);

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
    })
  }
}
