// function saudacao(nome){
//     console.log('Ola ', nome)
// }

// saudacao('John') 

// function calcularDobroNumero(num){
//     num * 2;
// }

// const dobroNumber = calcularDobroNumero(4);
// console.log('O drobro do numero 4 é', dobroNumber)

function pessoa(){
    return console.log(this.name)
}

name = 'John'

pessoa()