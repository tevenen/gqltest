const Comment = use('App/Models/Comment')

const typeDef = {
    async user(commentInJson) {
      const comment = new Comment()
      comment.newUp(commentInJson)

      const user = await comment.commentToUser().fetch()
      return user.toJSON();
    },

    async post(commentInJson) {
      const comment = new Comment()
      comment.newUp(commentInJson)

      const post = await comment.commentToPost().fetch()
      return post.toJSON()
    }
  }

module.exports = typeDef;