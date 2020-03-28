const typeDef = `
  type User {
    id: Int!
    username: String!
    email: String!
    posts: [Post]
  }
`;

module.exports = typeDef;
