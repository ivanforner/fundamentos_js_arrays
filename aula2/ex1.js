const nomes = ['João', 'Juliana', 'Ana', 'Caio',
'Lara', 'Marjorie', 'Guilherme', 'Aline',
'Fabiana', 'André', 'Carlos', 'Paulo',
'Bia', 'Viviane', 'Isabela', 'Vinicius',
'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = nomes.slice(0, nomes.length/2); // O primeiro parâmetro di slice() indica o começo do corte, o segundo indica o fim.
const sala2 = nomes.slice(nomes.length/2); // Se não inserirmos o último parâmetro o slice() itera até o final da lista.

console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);