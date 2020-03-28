const typeDef = `
  type Post {
    id: Int!
    title: String!
    slug: String!
    content: String!
    user: User!
  }
`;

module.exports = typeDef;
