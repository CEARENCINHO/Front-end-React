// Crie um array com 5 nomes. Use for para imprimir cada nome no console, um por linha.
let nome = ['John','Diogo','Lucimar','Sara','Jocilene'];

for(let i = 0; i <= nome.length - 1; i++){
    console.log('Nome:', nome[i])
}

nome.forEach((valor,indice) => {
    console.log('indice', indice, valor)
})

for(const a of nome){
    console.log('Nome:',a)
}


// Comece com um array de frutas. Adicione uma nova fruta ao final com push() e remova a primeira com shift(). Mostre o array antes e depois.

nome.push('Antonia')
console.log(nome)
nome.shift('John')
console.log(nome)
