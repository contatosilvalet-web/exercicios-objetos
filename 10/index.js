// clientes
const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

// formato do carrinho
/* {
    item: {
        nome: 'TV Samsung 4K',
        valorEmCentavos: 129900
    },
    quantidade: 1
}
*/

// LETRA A
// Adicione uma tv, dois cabos usb e uma webcam para o José
jose.carrinho.push(
    { item: tv, quantidade: 1 },
    { item: caboUsb, quantidade: 2 },
    { item: webcam, quantidade: 1 }
);

// LETRA B
//  Adicione dois notebooks para o Carlos
carlos.carrinho.push(
    { item: notebook, quantidade: 2 }
);

// LETRA C
// Adicione um teclado, dois cabos usb, um carregador, um mouse e um monitor para a Patricia
patricia.carrinho.push(
    { item: teclado, quantidade: 1 },
    { item: caboUsb, quantidade: 2 },
    { item: carregador, quantidade: 1 },
    { item: mouse, quantidade: 1 },
    { item: monitor, quantidade: 1 }
);

// LETRA D
// Adicione cinco webcams para o Renato
renato.carrinho.push(
    { item: webcam, quantidade: 5 }
);

// LETRA E
// Adicione uma webcam, dois cabos usb e um monitor para o Roberto
roberto.carrinho.push(
    { item: webcam, quantidade: 1 },
    { item: caboUsb, quantidade: 2 },
    { item: monitor, quantidade: 1 }
);

console.log("Carrinho do José ");
console.log(jose.carrinho);

console.log("\n Carrinho do Carlos ");
console.log(carlos.carrinho);

console.log("\n Carrinho da Patricia ");
console.log(patricia.carrinho);

console.log("\n Carrinho do Renato ");
console.log(renato.carrinho);

console.log("\n Carrinho do Roberto ");
console.log(roberto.carrinho);

/* Imprime
Carrinho do José 
[
  {
    item: { nome: 'TV Samsung 4K', valorEmCentavos: 129900 },
    quantidade: 1
  },
  {
    item: { nome: 'Cabo USB 2 Metros', valorEmCentavos: 1990 },
    quantidade: 2
  },
  {
    item: { nome: 'Webcam C920s', valorEmCentavos: 80000 },
    quantidade: 1
  }
]

 Carrinho do Carlos 
[
  {
    item: { nome: 'Notebook Dell', valorEmCentavos: 399990 },
    quantidade: 2
  }
]

 Carrinho da Patricia 
[
  {
    item: { nome: 'Teclado Keychron K8', valorEmCentavos: 50000 },
    quantidade: 1
  },
  {
    item: { nome: 'Cabo USB 2 Metros', valorEmCentavos: 1990 },
    quantidade: 2
  },
  {
    item: { nome: 'Carregador portátil', valorEmCentavos: 4590 },
    quantidade: 1
  },
  {
    item: { nome: 'Mouse MX Master 3', valorEmCentavos: 23000 },
    quantidade: 1
  },
  {
    item: { nome: 'Monitor LG 29 FHD', valorEmCentavos: 129900 },
    quantidade: 1
  }
]

 Carrinho do Renato 
[
  {
    item: { nome: 'Webcam C920s', valorEmCentavos: 80000 },
    quantidade: 5
  }
]

 Carrinho do Roberto 
[
  {
    item: { nome: 'Webcam C920s', valorEmCentavos: 80000 },
    quantidade: 1
  },
  {
    item: { nome: 'Cabo USB 2 Metros', valorEmCentavos: 1990 },
    quantidade: 2
  },
  {
    item: { nome: 'Monitor LG 29 FHD', valorEmCentavos: 129900 },
    quantidade: 1
  }
]

*/ 
