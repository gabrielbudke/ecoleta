import Knex from 'knex';

// Usada para quando queremos realizar alterações no banco
export async function up(knex: Knex) {
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        table.integer('point_id').notNullable().references('id').inTable('points');
        table.integer('item_id').notNullable().references('id').inTable('items');
    })
}

// Quando queremos deltar e voltar atrás quando algo não sai como queremos
export async function down(knex: Knex) {
    return knex.schema.dropTable('items');
}