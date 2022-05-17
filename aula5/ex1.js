const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 7.5];

// O método filter() tem como parâmetro uma arrow function que recebe, nesse caso, mais 2 parâmetros

// const reprovados = nomes.filter( (aluno, indice) => {
const reprovados = nomes.filter( (_, indice) => {
    return notas[indice] < 5; // Condição para o retorno, esse é o filtro
});

// Quando chamamos uma função callback que tem como parâmetro uma outra função, podemos utilizar o _ quando
// o parâmetro não for utilizado na arrow function


console.log(`Reprovados: ${reprovados}`);