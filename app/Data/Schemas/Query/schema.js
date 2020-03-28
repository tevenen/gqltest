const typeDef = `
  type Query {
    allUsers: [User]
    fetchUser(id: Int!): User
    allPosts: [Post]
    fetchPost(id: Int!): Post
    allComments: [Comment]
    fetchComment(id: Int!): Comment
  }
`;

module.exports = typeDef;
