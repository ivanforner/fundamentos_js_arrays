// Criando listas de duas dimensões

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediaDosAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

console.log(listaDeNotasEAlunos); // Array de duas dimensões
console.log(); // Apenas pulando uma linha
console.log(`A média de ${listaDeNotasEAlunos[0][0]} é ${listaDeNotasEAlunos[1][0]}`); // Acesso específico