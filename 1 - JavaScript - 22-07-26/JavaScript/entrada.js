// readLine = biblioteca para ler os dados do usuario pelo terminal
// biblioteca: require

const readline = require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question("Qual é seu nome? ", (nome) => {
    console.log('Ola', nome)
    console.log('Boas vindas ao nosso sistema!')

    leitor.question('Qual é sua idade? ', (idade) => {
        if (Number(idade) >= 18) {
            console.log('Uau! Voce já pode tirar sua CNH')
        } else {
            console.log('Voce ainda não pode tirar a CNH')
        }
        leitor.close()
    })
})