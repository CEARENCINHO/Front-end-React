// // Crie uma função chamada saudacao que exibe a mensagem "Olá! Seja bem-vindo(a)!" ao ser chamada.

// function saudacao(){
//     return console.log('Opa, tudo bem?')
// }
// saudacao()

// // Crie uma função apresentarPessoa(nome, idade) que exibe no console: "Olá, meu nome é [nome] e tenho [idade] anos."
// const readline = require('readline')

// const leitor = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// leitor.question('Qual é seu nome?', (nome) => {
//     leitor.question("Quantos anos você tem?", (idade) => {
//         if (idade >= 18){
//             console.log((nome),"já é de maior, e esta com",(idade))
//         } else {
//             console.log((nome),"ainda menor de idade, e esta com",(idade))
//         }
//         leitor.close()
//     })
// })



// // Crie uma função chamada calcularIMC que receba dois parâmetros: peso e altura.
// // A função deve calcular o IMC utilizando a fórmula:

function imc(alt,ps){
    let imcResult = ps / (alt * alt)
    return console.log("Seu IMC é",imcResult)
}

const readLine = require("readline")
const leitor = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question("Qual é sua altura?",(altura) => {
    leitor.question("Qual é se peso?",(peso) => {
        imc(altura,peso)
        leitor.close()
    })
})