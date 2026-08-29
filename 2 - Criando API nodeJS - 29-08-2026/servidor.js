import http from "http";

// Porta de comunicação
const PORT = 3000 


const server = http.createServer((req,res) => {
    res.writeHead(404,{'content-type':'text/plain'})
    res.end('Curso de Node.js')
})

server.listen(PORT, () => {
    console.log('Servidor ouvindo!')
})