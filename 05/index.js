const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
};

const listaDeAulas = [
    { identificador: "01", nome_da_aula: "Introdução a programação" },
    { identificador: "02", nome_da_aula: "Variáveis" },
    { identificador: "03", nome_da_aula: "Condicionais" },
    { identificador: "04", nome_da_aula: "Arrays" }
];

curso.aulas = listaDeAulas;

console.log("Dados do Curso");
console.log(curso);

/* Imprime
Dados do Curso
{
  id: 1234,
  nome: 'Lógica de programação',
  aulas: [
    { identificador: '01', nome_da_aula: 'Introdução a programação' },
    { identificador: '02', nome_da_aula: 'Variáveis' },
    { identificador: '03', nome_da_aula: 'Condicionais' },
    { identificador: '04', nome_da_aula: 'Arrays' }
  ]
}
  */

// Outro exemplo
const curso = {
    id: 5234,
    nome: "Javascript",
    aulas: [],
};

const listaDeAulas = [
    { identificador: "01", nome_da_aula: "Noções Básicas de Javascript" },
    { identificador: "02", nome_da_aula: "Manipulando Elementos da View" },
    { identificador: "03", nome_da_aula: "Executando código a partir de um arquivo" },
    { identificador: "04", nome_da_aula: "Entendendo um pouco sobre os tipos" },
    { identificador: "05", nome_da_aula: "Capturando um evento de click" }
];

curso.aulas = listaDeAulas;

console.log("Dados do Curso");
console.log(curso);

/* Imprime
Dados do Curso
{
  id: 5234,
  nome: 'Javascript',
  aulas: [
    {
      identificador: '01',
      nome_da_aula: 'Noções Básicas de Javascript'
    },
    {
      identificador: '02',
      nome_da_aula: 'Manipulando Elementos da View'
    },
    {
      identificador: '03',
      nome_da_aula: 'Executando código a partir de um arquivo'
    },
    {
      identificador: '04',
      nome_da_aula: 'Entendendo um pouco sobre os tipos'
    },
    {
      identificador: '05',
      nome_da_aula: 'Capturando um evento de click'
    }
  ]
} 
*/
