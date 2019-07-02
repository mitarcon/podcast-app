'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubcriptionSchema extends Schema {
  up () {
    this.create('subcriptions', (table) => {
      table.increments()
      table.integer('user_id')
      table.integer('podcast_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('subcriptions')
  }
}

module.exports = SubcriptionSchema
