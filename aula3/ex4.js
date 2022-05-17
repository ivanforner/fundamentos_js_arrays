const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

// forEach é uma função callback... nesse caso o parâmetro da função é uma outra função (arrow function)
// nota é o parâmetro que define cada elemento de uma lista
notas.forEach( nota => {
    somaDasNotas += nota;
});

let media = somaDasNotas / notas.length;

console.log(media);