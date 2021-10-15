
exports.up = function(knex) {
  return knex.schema
      .createTable('bible', tbl =>{
          tbl.increments('bible_id')
          tbl.string('book', 100)
              .notNullable()
          tbl.integer('chapter')
              .unsigned()
              .notNullable()
          tbl.integer('verse')
              .unsigned()
              .notNullable()
          tbl.text('passage')
              .unique()
              .notNullable()
          tbl.string('version')
              .notNullable()
          tbl.text('notes')
      })
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists('bible')
};
