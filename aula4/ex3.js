let nomes = ['ana julia', 'Caio vinicius', 'BIA Silva'];

// Tornar os nomes maiúsculos
const nomesAtualizados = nomes.map( (nome) => {
    return nome.toUpperCase();
});

console.log(nomesAtualizados);

// Enquanto o método forEach não tem um retorno, o método map() pode retornar um array se a função informada tiver um return em seu escopo.