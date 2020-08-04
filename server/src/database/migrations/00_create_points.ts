import Knex from 'knex';

// Usada para quando queremos realizar alterações no banco
export async function up(knex: Knex) {
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();        
        table.decimal('latitude').notNullable(); 
        table.decimal('longitude').notNullable();         
        table.string('city').notNullable();        
        table.string('uf', 2).notNullable();        
    })
}

// Quando queremos deltar e voltar atrás quando algo não sai como queremos
export async function down(knex: Knex) {
    return knex.schema.dropTable('points');
}