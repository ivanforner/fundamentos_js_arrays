const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediaDosAlunos = [10, 7, 9, 6];
let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

// includes() => Devolve um booleano
// indexOf() => Desenvol a posição do elemento no array

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) { // o método includes() retorna true caso a lista contenha o valor
        let index = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return `O aluno ${listaDeNotasEAlunos[0][index]} tem a nota ${listaDeNotasEAlunos[1][index]}`
    } else {
        return 'Aluno não cadastrado'
    }
}

console.log(exibeNomeNota('Juliana'));