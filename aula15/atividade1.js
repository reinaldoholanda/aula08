//atividade montada na aula 15 do curso de JavaScript da B7Web

//leia 5 notas de um aluno, armazenando-as em uma variável de soma e depois calcule a média. Importante: use o laço while para ler as notas 

//pedir uma nota
//armazenar com as notas anteriores
//ler mais uma nota

//esse processo se repete até que o aluno tenha 5 notas

let notasLidas = 0
let somaNotas = 0
let totalnotas = 5

while (notasLidas < totalnotas){
    let nota = Number(prompt('Digite a nota do aluno: '))
    somaNotas += nota
    //atualização do quantitativo de notas lidas
    //ele irá variar de 0 a 4 = total de 5 notas
    notasLidas++
}

let media = somaNotas / totalnotas
console.log(`A média do aluno é: ${media}`)