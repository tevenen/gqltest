const User = use('App/Models/User')
const Post = use('App/Models/Post')
const Comment = use('App/Models/Comment')

// Query resolver
const typeDef = {
    // Fetch all users
    async allUsers() {
      const users = await User.all()
      return users.toJSON()
    },
    // Get a user by its ID
    async fetchUser(_, { id }) {
      const user = await User.find(id)
      return user.toJSON()
    },
    // Fetch all posts
    async allPosts() {
      const posts = await Post.all()
      return posts.toJSON()
    },
    // Get a post by its ID
    async fetchPost(_, { id }) {
      const post = await Post.find(id)
      return post.toJSON()
    },
    async allComments() {
      const comments = await Comment.all()
      return comments.toJSON();
    },
    async fetchComment(_, { id }) {
      const comment = Comment.find(id)
      return comment.toJSON();
    }
  }

module.exports = typeDef;
