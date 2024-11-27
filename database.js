const { Pool } = require('pg');

const pool = new Pool({
    user: 'restaurant-management',
    password: '10850300',
    host: 'localhost',
    port: 5432,
    database: 'restaurant-management-system'
});

module.exports = pool;
