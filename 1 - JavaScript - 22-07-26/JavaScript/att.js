let idade = 13

if (idade >= 18){
    console.log('Compra autorizada!')
} else{
    console.log("Cliente menor de idade")
}

let horaAtual = 22

if (horaAtual >= 6 && horaAtual <= 12){
    console.log('Bom dia!')
} else if (horaAtual > 12 && horaAtual <= 18){
    console.log('Boa tarde!')
} else{
    console.log('Boa noite')
}

let num = -85

let resultado = num > 0 ? 'Numero positivo' : 'Nuemro negativo'
console.log(resultado)

// Crie uma variável nota entre 0 e 10. Use if/else if/else para retornar: A (9-10), B (8-9), C (6-7.9), D (4-5.9), E (0-3.9).
let nota = 0

if (nota <= 10 && nota >= 9){
    console.log('Nota: A')
} else if (nota < 9 && nota >= 8){
    console.log('Nota: B')
} else if (nota >= 6 && nota <= 7.9){
    console.log('Nota: C')
} else if (nota <= 5.9 && nota >= 4){
    console.log('Nota: D')
} else if (nota <= 3.9 && nota >= 0){
    console.log('Nota: E')
}

let num2  = 3
let a = num2 % 2
console.log(a)
let imparOrPar = a != 0 ? 'numero impar':'Numero Par'
console.log(imparOrPar)

//Crie uma variável opcao com valores de 1 a 3. Use switch para mostrar: 1 - "Cadastrar", 2 - "Listar", 3 - "Sair".
let opcao = 3
switch(opcao){
    case 1:
        console.log('Cadastrar')
        break
    case 2:
        console.log('Listar')
        break
    case 3:
        console.log('Sair')
        break
    default:
        break
}

