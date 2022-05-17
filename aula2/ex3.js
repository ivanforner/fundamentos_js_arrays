const salaDePython = ['Melissa', 'Helena', 'Rodrigo'];
const salaDeJavaScript = ['Ju', 'Leo', 'Raquel'];

const salasUnificadas = salaDePython.concat(salaDeJavaScript); // Não altera o array original, por esse motivo foi criada uma nova variável

console.log(`Sala unificada: ${salasUnificadas}`);