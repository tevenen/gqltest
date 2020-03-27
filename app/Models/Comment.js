'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comment extends Model {
  /**
   * A comment belongs to a user.
   *
   * @method commentToUser
   *
   * @return {Object}
   */
  commentToUser () {
    return this.belongsTo('App/Models/User')
  }

  /**
   * A comment belongs to a post
   *
   * @method commentToPost
   *
   * @returns {Object}
   */
  commentToPost() {
    return this.belongsTo('App/Models/Post');
  }
}

module.exports = Comment;
