import Knex from 'knex';

// Usada para quando queremos realizar alterações no banco
export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    })
}

// Quando queremos deltar e voltar atrás quando algo não sai como queremos
export async function down(knex: Knex) {
    return knex.schema.dropTable('items');
}