const agora = new Date() // objeto de data
console.log(agora)

console.log('Ano: ', agora.getFullYear())
console.log('Mes (de 0 a 11): ', agora.getMonth())
console.log('Dia do mês:', agora.getDate())

const mes = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
let mesAtual = mes[agora.getMonth()]
console.log('Data:',agora.getDate(),'/',mesAtual,'/',agora.getFullYear())