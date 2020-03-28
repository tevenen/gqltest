const typeDef = `
  type Mutation {
    login (email: String!, password: String!): String
    createUser (username: String!, email: String!, password: String!): User
    addPost (title: String!, content: String!): Post
    editPost (id: ID!, title: String!, content: String!):Post
    addComment(content: String!, postId: Int!): Comment
  }
`;

module.exports = typeDef;
