// app/data/resolvers.js

'use strict'

const User = use('App/Models/User')
const Post = use('App/Models/Post')
const Comment = use('App/Models/Comment')
const slugify = require('slugify')

// Define resolvers
const resolvers = {
  Query: {
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

  },
  Mutation: {
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
  },
  User: {
    // Fetch all posts created by a user
    async posts(userInJson) {
      // Convert JSON to model instance
      const user = new User()
      user.newUp(userInJson)

      const posts = await user.posts().fetch()
      return posts.toJSON()
    }
  },
  Post: {
    // Fetch the author of a particular post
    async user(postInJson) {
      // Convert JSON to model instance
      const post = new Post()
      post.newUp(postInJson)

      const user = await post.user().fetch()
      return user.toJSON()
    }
  },
  Comment: {
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
}

module.exports = resolvers;
