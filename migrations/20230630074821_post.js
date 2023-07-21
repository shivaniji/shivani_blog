exports.up = function(knex) {
    return knex.schema.createTable("post", function (table) {
        table.increments("id");
        table.string("user_id").notNullable();
        table.string("title").notNullable();
        // table.string("").unique().notNullable();
        table.string("desription").notNullable();
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable("post")
     
};