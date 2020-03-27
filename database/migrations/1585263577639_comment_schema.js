'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CommentSchema extends Schema {
  up () {
    this.create('comments', (table) => {
        table.increments()
        table.integer('user_id').unsigned().notNullable()
        table.integer('post_id').unsigned().notNullable()
        table.string('content').notNullable()
        table.timestamps()
    });
  }

  down () {
    this.drop('comments');
  }
}

module.exports = CommentSchema
