const Post = use('App/Models/Post')

const typeDef = {
    // Fetch the author of a particular post
    async user(postInJson) {
      // Convert JSON to model instance
      const post = new Post()
      post.newUp(postInJson)

      const user = await post.user().fetch()
      return user.toJSON()
    }
  }

module.exports = typeDef;
