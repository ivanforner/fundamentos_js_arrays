const notas = [10, 9, 8, 7, 6];

const notasAtualizadas = notas.map( (nota) => nota == 10 ? nota : ++nota ); // O map() retorna uma nova array

const notasAtualizadas2 = notas.map( (nota) => { 
    return nota == 10 ? nota : ++nota 
}); // Forma diferente de escrever

// O ++nota é igual ao nota++ mas ele atribui primeiro e depois retorna o valor...

console.log(notasAtualizadas);
console.log(notasAtualizadas2);