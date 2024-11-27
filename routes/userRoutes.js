const express = require('express');
const { createUser } = require('../models/userModel');
const { deleteUser } = require('../models/userModel');
const router = express.Router();

router.post('/users', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await createUser(username, email, password);
        res.status(201).json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao criar usuário.');
    }
});

router.delete('/users/delete/:username', async (req, res) => {
    try {
        const username = req.params.username;
        const deletedUser = await deleteUser(username);
        res.status(200).json(deletedUser);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao excluir usuário.');
    }
});

module.exports = router;
