const notas = [10, 6, 8];

// Método para acrescentar na última posição do nosso array algum elemento
notas.push(7); // Se não passarmos nenhum parâmetro para o push(), o método vai acrescentar um elemento "undefined" que pode dar problema, dependendo da implementação

console.log(notas); // log

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media); // log