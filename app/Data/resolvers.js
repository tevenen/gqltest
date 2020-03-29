// app/data/resolvers.js

'use strict'


const Query = require('./Schemas/Query/resolvers');
const Mutation = require('./Schemas/Mutation/resolvers');

const User = require('./Schemas/User/resolvers');
const Post = require('./Schemas/Post/resolvers');
const Comment = require('./Schemas/Comment/resolvers');

// Define resolvers
const resolvers = {
  Query,
  Mutation,
  User,
  Post,
  Comment
}

module.exports = resolvers;
