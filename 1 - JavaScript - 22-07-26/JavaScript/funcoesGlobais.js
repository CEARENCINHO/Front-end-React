function saudacao(){
    console.log('oi')
}

setTimeout(saudacao, 2000) // função que cria um tempo em ms para ser exercutado
                           // função global
let contador = 0   

// Definir tempo entre execuções e um tempo de intervalo
const id = setInterval(() => {
    contador++
    console.log('Tempo:', contador)
    if (contador == 10){
        clearInterval(id)
    }
}, 1000)
   

// Definir tempo entre execuções e um tempo de intervalo
const ida = setInterval(() => {
    contador--
    console.log('Tempo:', contador)
    if (contador == 0){
        clearInterval(ida)
    }
}, 1000)