const User = use('App/Models/User')

const typeDef = {
  // Fetch all posts created by a user
  async posts(userInJson) {
    // Convert JSON to model instance
    const user = new User()
    user.newUp(userInJson)

    const posts = await user.posts().fetch()
    return posts.toJSON()
  }
}

module.exports = typeDef;
