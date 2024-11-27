const pool = require('../database');

const getUser = async (email) => {
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const result = await pool.query(query, values);
    return result.rows[0];
};

const createUser = async (username, email, password) => {
    const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *';
    const values = [username, email, password];
    const result = await pool.query(query, values);
    return result.rows[0];
};

const deleteUser = async (email) => {
    const query = 'DELETE FROM users WHERE email = $1';
    const values = [email];
    const result = await pool.query(query, values);
    return result.rows[0];
}

module.exports = { createUser, deleteUser, getUser};

