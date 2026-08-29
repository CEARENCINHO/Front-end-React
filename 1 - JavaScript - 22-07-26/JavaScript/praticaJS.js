// Use um for para mostrar no console os números de 1 até 10, um por linha.
for (let n = 0; n <= 10; n++){
    console.log(n)
}

// Some todos os números de 1 a 100. Mostre o resultado no final com uma mensagem explicativa.
for (let i = 1; i <= 100; i++){
    let numberAnterior = i - 1
    result = i + numberAnterior
} 
console.log('Soma de todos os numeros de 1 a 100:', result)

// Peça um número e mostre a tabuada desse número (de 1 a 10) usando um for.
for (let i = 0; i <= 10; i++){
    console.log('2 +', i,'=',i*2)
}

//Use while para contar de 10 até 0 no console. Mostre uma mensagem no fim: "Contagem finalizada!".
let contador = 10
while(contador >= 0){
    console.log(contador)
    contador--
}
console.log('Contagem finalizada')

// Simule a digitação de números usando uma variável numeroDigitado.
// Use um do...while para repetir a execução até que o valor seja 0.
// Conte quantos números diferentes de zero foram digitados e mostre o total no console ao final.
let numerosDigitados = 0    
do{
    if (32 !== 0){
        numerosDigitados++
    }
}while(32 !== 0)