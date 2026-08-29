function calcular(num1,num2,operador){
    return operador(num1,num2)
}

function somar(num1,num2){
    // console.log('Soma:', num1 + num2)
    return num1 + num2
}

function subtracao(num1,num2){
    // console.log('Subtração:', num1 + num2)
    return num1 - num2
}

const resposta = calcular(2,5,subtracao)

console.log(resposta)