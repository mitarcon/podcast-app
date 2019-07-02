'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EpisodeSchema extends Schema {
  up () {
    this.create('episodes', (table) => {
      table.increments().integer('podcast_id')
      table.integer('user_id')
      table.string('title')
      table.string('audio')
      table.string('sumary')
      table.timestamps()
    })
  }

  down () {
    this.drop('episodes')
  }
}

module.exports = EpisodeSchema
