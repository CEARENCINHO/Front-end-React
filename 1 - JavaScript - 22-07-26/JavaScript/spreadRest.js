// um objeto 
const camila1 = {
    nome: 'Camila',
    idade: 29,
    profissao: 'Desenvolvedora'
}


// Vamos supor que eu queira usar o mesmo objeto contendo as mesmas propriedade do objeto de origem
const marcelo = { ...camila1} // Usanod os 3 pontos antes do nome do objeto, nós estamos dizendo que vamos usar as mesmo propriedade do objeto camila1

marcelo.nome = 'Marcelo'
marcelo.idade = 37
marcelo.profissao = 'Eng. de Software'


console.log(camila1)
console.log(marcelo)