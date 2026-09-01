// import http from "http";
import app from './src/app.js'
// Porta de comunicação
const PORT = 3000 

// criando rotas
const rotas = {
    '/':'Curso de Node.js',
    '/livros':'Entrei na rota livros',
    '/autores':'Entrei na rota autores'
}


// colocar o servidor no ar
app.listen(PORT, () => {
    console.log('Servidor ouvindo!')
})