import http from "http";

// Porta de comunicação
const PORT = 3000 

// criando rotas
const rotas = {
    '/':'Curso de Node.js',
    '/livros':'Entrei na rota livros',
    '/autores':'Entrei na rota autores'
}

const server = http.createServer((req,res) => {
    res.writeHead(404,{'content-type':'text/plain'})
    res.end(rotas[req.url])
})

server.listen(PORT, () => {
    console.log('Servidor ouvindo!')
})