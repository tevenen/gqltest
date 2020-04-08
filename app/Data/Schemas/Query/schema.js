const typeDef = `
  type Query {
    allUsers: [User]
    fetchUser(id: Int!): User
    allPosts: [Post]
    fetchPost(id: Int!): Post
    allComments: [Comment]
    fetchComment(id: Int!): Comment
    sendMail(email: String!): Boolean
  }
`;

module.exports = typeDef;
