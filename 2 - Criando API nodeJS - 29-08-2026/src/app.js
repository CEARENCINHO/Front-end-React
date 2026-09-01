import express from 'express'// importa o fremework Express

const app = express(); // incializa do Express

// cria rota para o metodo GET
app.get('/',(req,res)=> {
    res.status(200).send('Curso de node.js');
});

export default app;
