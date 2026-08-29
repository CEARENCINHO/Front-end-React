// contar quantos numeros tem de 0 a 1200
let totalNumerosPar = 0
let totalNumeroImpar = 0


for(let contador = 0; contador <= 1200; contador++){
    let paridade = contador % 2
    if (paridade == 0){
        totalNumerosPar++
    } else{
        totalNumeroImpar++
    }
}
console.log('Total de numeros par:', totalNumerosPar)
console.log('Total de numeros impar:', totalNumeroImpar)