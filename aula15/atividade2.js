// Atividade 2 - Aula 15
// Leia um limite e exiba todos os números pares de 0 até ele

//processo repetitivo: testar se o número é par ou ímpar, se for par, exibir na tela.

// as informações que precisamos: o número limite e o número inicial

let limite = Number(prompt('Digite um limite: '))
let numeroinicial = 0

while (numeroinicial <= limite){
    if (numeroinicial % 2 === 0){
        console.log(numeroinicial)
    }
    //atualização do número inicial que controla o laço
    numeroinicial++

}