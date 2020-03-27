'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Post extends Model {
  /**
   * A post belongs to a user.
   *
   * @method user
   *
   * @return {Object}
   */
  user () {
    return this.belongsTo('App/Models/User')
  }

  /**
   * A post has many comments
   *
   * @method postToComment
   *
   * @returns {HasMany}
   */
  postToComment() {
    return this.hasMany('App/Models/Comment');
  }
}

module.exports = Post;
