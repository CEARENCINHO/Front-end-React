// o while ele primeiro exercuta a condição antes de roda, se a condição inicial der falso, o while não exercuta
let contador = 1
while (contador <= 10){
    console.log('Numero atual:', contador)
    contador++
}

// diferente do "while", o "do while" primeiro exercuta o comando e depois verifica a condição.
let numero = 1
do {
    console.log('Numero atual:', numero)
    numero++
} while(numero <= 10)

// PRATICA!
let number = 0
const word = 'I speak a bit of englis'
while(number <= word.length - 1){
    console.log(word[number])
    number++
}

let number_2th = 0
do {
    paridade = number_2th % 2
    if(paridade == 0){
        console.log('Numero Par:', number_2th)
    }
    number_2th++

}while(number_2th <= 100)
