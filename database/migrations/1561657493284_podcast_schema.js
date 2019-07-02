'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PodcastSchema extends Schema {
  up() {
    this.create('podcasts', (table) => {
      table.increments()
      table.integer('user_id')
      table.integer('category_id')
      table.string('title')
      table.string('slug')
      table.string('logo')
      table.string('description')
      table.timestamps()
    })
  }

  down() {
    this.drop('podcasts')
  }
}

module.exports = PodcastSchema
