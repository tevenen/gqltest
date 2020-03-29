const User = use('App/Models/User')
const Post = use('App/Models/Post')
const Comment = use('App/Models/Comment')
const slugify = require('slugify')

// Mutation resolver
const typeDef =  {
    // Handles user login
    async login(_, { email, password }, { auth }) {
      const { token } = await auth.attempt(email, password)
      return token
    },

    // Create new user
    async createUser(_, { username, email, password }) {
      return await User.create({ username, email, password })
    },

    // Add a new post
    async addPost(_, { title, content }, { auth }) {
      try {
        // Check if user is logged in
        await auth.check()

        // Get the authenticated user
        const user = await auth.getUser()

        // Add new post
        return await Post.create({
          user_id: user.id,
          title,
          slug: slugify(title, { lower: true }),
          content
        })
      } catch (error) {
        // Throw error if user is not authenticated
        throw new Error('Missing or invalid jwt token')
      }
    },

    // Edit post
    async editPost(_, {id, title, content }, { auth }) {
      try {
        // Check if user is logged in
        await auth.check()

        // Get the authenticated user

      } catch (error) {
        // Throw error if user is not authenticated
        throw new Error('Missing or invalid jwt token')

      }

      const user = await auth.getUser()

      const post = await Post.find(id)
      if(!post){
        throw new Error ("Post ne postoji")
      }

      if(user.id === post.user_id){
        post.title = title
        post.content = content
        await post.save()
        return post
      }
      else{
        throw new Error('Nemate pravo da menjate ovaj post')
      }

    },
    async addComment(_, { content, postId }, { auth }) {
      try {
        // Check if user is logged in
        await auth.check()

        // Get the authenticated user

      } catch (error) {
        // Throw error if user is not authenticated
        throw new Error('Missing or invalid jwt token')

      }

      const user = await auth.getUser()

      return await Comment.create({
        user_id: user.id,
        post_id: postId,
        content
      })
    }
  }

  module.exports = typeDef;