const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', userRoutes);

// Middleware para processar dados de formulários
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/users/delete', (req, res) => {
    const email = req.body.email;
    if (!email) {
        return res.status(400).send('Email é obrigatório');
    }
    // Lógica para deletar o usuário
    console.log(`Deletando usuário com email: ${email}`);
    res.status(200).send(`Usuário com email ${email} deletado com sucesso`);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
