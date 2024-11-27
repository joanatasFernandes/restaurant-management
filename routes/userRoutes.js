const express = require('express');
const { createUser } = require('../models/userModel');
const { deleteUser } = require('../models/userModel');
const { getUser } = require('../models/userModel');
const router = express.Router();

router.get('/users/get', async (req, res) => {
    try {
        const {email} = req.body;
        const user = await getUser(email);
        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao buscar usuários.');
    }
});

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

router.delete('/users/delete', async (req, res) => {
    try {
        const { email } = req.body;
        const deletedUser = await deleteUser(email);
        console.log('Deletando usuário....');
        res.status(200).json(deletedUser);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao deletar usuário.');
    }
});

module.exports = router;
