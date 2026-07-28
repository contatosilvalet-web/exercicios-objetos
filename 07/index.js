const livro = {
    nome: 'O poder do hábito',
    capitulos: [
        {
            nome: "O loop do hábito",
        },
        {
            nome: "O cérebro ansioso",
        },
        {
            nome: "A regra de ouro da mudança de hábito",
        },
        {
            nome: "Hábitos angulares, ou a balada de Paul O`neill",
        },
        {
            nome: "Starbucks e o hábito do sucesso",
        },
        {
            nome: "O poder de uma crise",
        },
        {
            nome: "Como a target sabe o que você quer antes que você saiba",
        },
        {
            nome: "A Saddleback Church e o boicote aos ônibus de Montgomery",
        },
        {
            nome: "A neorologia do livre-arbítrio",
        },
    ]
}


livro.capitulos = livro.capitulos.map((capitulo, index) => {
    return {
        numero: index + 1,
        ...capitulo       
    };
});

console.log(livro.nome);
console.log(livro.capitulos);

/* Imprime
O poder do hábito
[
  { numero: 1, nome: 'O loop do hábito' },
  { numero: 2, nome: 'O cérebro ansioso' },
  { numero: 3, nome: 'A regra de ouro da mudança de hábito' },
  { numero: 4, nome: 'Hábitos angulares, ou a balada de Paul O`neill' },
  { numero: 5, nome: 'Starbucks e o hábito do sucesso' },
  { numero: 6, nome: 'O poder de uma crise' },
  {
    numero: 7,
    nome: 'Como a target sabe o que você quer antes que você saiba'
  },
  {
    numero: 8,
    nome: 'A Saddleback Church e o boicote aos ônibus de Montgomery'
  },
  { numero: 9, nome: 'A neorologia do livre-arbítrio' }
]

*/

// Outros exemplos
const livro = {
    nome: 'A Metamorfose',
    autor: 'Franz Kafka',
    capitulos: [
        {
            nome: "O Início da História",
        },
        {
            nome: "O despertar",
        },
        {
            nome: "A reação externa",
        },
        {
            nome: "O Conflito e o Isolamento",
        },
        {
            nome: "A perda do papel de provedor",
        },
        {
            nome: "A mudança na família",
        },
        {
            nome: "A degradação",
        },
        {
            nome: "O Desfecho",
        },
        {
            nome: "A rejeição final",
        },
        {
            nome: "A morte e o alívio",
        }
    ]
}


livro.capitulos = livro.capitulos.map((capitulo, index) => {
    return {
        numero: index + 1,
        ...capitulo       
    };
});

console.log(livro.nome);
console.log(livro.autor);
console.log(livro.capitulos);

/* Imprime
A Metamorfose
Franz Kafka
[
  { numero: 1, nome: 'O Início da História' },
  { numero: 2, nome: 'O despertar' },
  { numero: 3, nome: 'A reação externa' },
  { numero: 4, nome: 'O Conflito e o Isolamento' },
  { numero: 5, nome: 'A perda do papel de provedor' },
  { numero: 6, nome: 'A mudança na família' },
  { numero: 7, nome: 'A degradação' },
  { numero: 8, nome: 'O Desfecho' },
  { numero: 9, nome: 'A rejeição final' },
  { numero: 10, nome: 'A morte e o alívio' }
]
*/
