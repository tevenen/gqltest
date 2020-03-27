// app/data/schema.js

'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

// Define our schema using the GraphQL schema language
const typeDefs = `
  type User {
    id: Int!
    username: String!
    email: String!
    posts: [Post]
  }
  type Post {
    id: Int!
    title: String!
    slug: String!
    content: String!
    user: User!
  }
  type Comment {
    id: Int!
    user: User!
    post: Post!
    content: String!
  }
  
  type Query {
    allUsers: [User]
    fetchUser(id: Int!): User
    allPosts: [Post]
    fetchPost(id: Int!): Post
    allComments: [Comment]
    fetchComment(id: Int!): Comment
  }
  
  type Mutation {
    login (email: String!, password: String!): String
    createUser (username: String!, email: String!, password: String!): User
    addPost (title: String!, content: String!): Post
    editPost (id: ID!, title: String!, content: String!):Post
    addComment(content: String!, postId: Int!): Comment
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers })
