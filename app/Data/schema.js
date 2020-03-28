// app/data/schema.js

'use strict'

const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const Queries = require('./Schemas/Query/schema');
const Mutations = require('./Schemas/Mutation/schema');
const Post = require('./Schemas/Post/schema');
const User = require('./Schemas/User/schema');
const Comment = require('./Schemas/Comment/schema');

const typeDefs = [
  Queries,
  Mutations,
  Post,
  User,
  Comment
];

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers });
