import express from 'express'// importa o fremework Express
// import { timeout } from 'nodemon/lib/config'

const app = express(); // incializa do 
app.use(express.json())

const livros = [
    {
        id: 1,
        titulo: 'O Senhor dos Anéis'
    },
    {
        id: 2,
        titulo: 'O Hobbit'
    }
]

function buscarLivros(id){
    return livros.findIndex(livros => { // findIndex = ele procura um indice dentro da array
        return livros.id === Number(id)
    })
}

// cria rota para o metodo GET
app.get('/',(req,res)=> {
    res.status(200).send('Curso de node.js');
});

app.get('/livros',(req,res) => {
    res.status(200).json(livros)
})

// quando tem :, o express entende que não é uma palavra fixa, mas sim uma variavel
app.get('/livros/:id', (req,res) => {
    const index = buscarLivros(req.params.id) // dentro do parenteses ta dizendo que o id vai ser um parametro do objeto 'req'
    res.status(200).json(livros[index])
})

app.post('/livros', (req,res) => {
    livros.push(req.body) // o body puxa o conteudo da API
    res.status(201).send('Livro cadastrado com sucesso!')
})


export default app;
