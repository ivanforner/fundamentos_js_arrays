const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

// Com o splice() vamos indicar que a Ana e o Caio vão sair do array, e no lugar colocaremos o Rodrigo.
// listaDeChamada.splice(índice do primeiro elemento, quantidade de elementos a remover, novo elemento).
// O terceiro o parâmetro é opicional...
listaDeChamada.splice(1, 2, 'Rodrigo')

console.log(`Lista de chamada: ${listaDeChamada}`);

// O splice também pode ser utilizado para acrescentar elementos em posições específicas
listaDeChamada.splice(2, 0, 'Ivan');
console.log(listaDeChamada); // Perceba que no índice 2, foi acrescentado o nome 'Ivan'.