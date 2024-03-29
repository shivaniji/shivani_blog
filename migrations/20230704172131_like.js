// exports.up = function(knex) {
//     return knex.schema.createTable("users", function (table) {
//         table.increments("id");
//         table.string("first_name").notNullable();
//         table.string("last_name").notNullable();
//         table.string("email").unique().notNullable();
//         table.string("password").notNullable();
//     })
  
// };

// exports.down = function(knex) {
//     return knex.schema.dropTable("users")
  
// };

exports.up = function(knex) {
    return knex.schema
      .createTable("likes", function (table) {
        table.increments("id");
        table.integer("user_id").notNullable();
        table.integer("post_id").notNullable();
        table.boolean("like");
    })
};


exports.down = function(knex) {
    return knex.schema.dropTable("likes")

};