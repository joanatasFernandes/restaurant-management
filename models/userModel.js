const pool = require('../database');

const createUser = async (username, email, password) => {
    const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *';
    const values = [username, email, password];
    const result = await pool.query(query, values);
    return result.rows[0];
};

module.exports = { createUser };

const deleteUser = async (username) => {
    const query = 'DELETE FROM users WHERE username = $1';
    const values = [username];
    const result = await pool.query(query, values);
    return result.rows[0];
}

module.exports = { deleteUser };
