const carros = [
  {
    marca: "Chevrolet",
    modelo: "Onix",
    ano: 2016,
    cor: "Branco",
    quantidade_portas: 4,
    automatico: false
  },
  {
    marca: "Chevrolet",
    modelo: "Onix",
    ano: 2020,
    cor: "Cinza",
    quantidade_portas: 4,
    automatico: true
  },
  {
    marca: "BYD",
    modelo: "Song Plus",
    ano: 2026,
    cor: "Preto",
    quantidade_portas: 4,
    automatico: true
  }
];

console.log("Lista de Carros");
console.log(carros);

console.log(`O primeiro carro da lista é um ${carros[0].marca} ${carros[0].modelo}.`);

if (carros[2].automatico) {
  console.log(`O ${carros[2].modelo} possui câmbio automático.`);
} else {
  console.log(`O ${carros[2].modelo} possui câmbio manual.`);
}

/* Imprime
Lista de Carros
[
  {
    marca: 'Chevrolet',
    modelo: 'Onix',
    ano: 2016,
    cor: 'Branco',
    quantidade_portas: 4,
    automatico: false
  },
  {
    marca: 'Chevrolet',
    modelo: 'Onix',
    ano: 2020,
    cor: 'Cinza',
    quantidade_portas: 4,
    automatico: true
  },
  {
    marca: 'BYD',
    modelo: 'Song Plus',
    ano: 2026,
    cor: 'Preto',
    quantidade_portas: 4,
    automatico: true
  }
]
O primeiro carro da lista é um Chevrolet Onix.
O Song Plus possui câmbio automático. */

// Outros exemplos
const carros = [
  {
    marca: "BYD",
    modelo: "Dolphin Mini",
    ano: 2025,
    cor: "Rosa",
    quantidade_portas: 4,
    automatico: true
  },
  {
    marca: "Volkswagen",
    modelo: "Gol",
    ano: 2013,
    cor: "Branco",
    quantidade_portas: 2,
    automatico: false
  },
  {
    marca: "Ford",
    modelo: "Fiesta",
    ano: 1999,
    cor: "Vermelho",
    quantidade_portas: 4,
    automatico: false
  }
];

console.log("Lista de Carros");
console.log(carros);

console.log(`O primeiro carro da lista é um ${carros[0].marca} ${carros[0].modelo}.`);

if (carros[2].automatico) {
  console.log(`O ${carros[2].modelo} possui câmbio automático.`);
} else {
  console.log(`O ${carros[2].modelo} possui câmbio manual.`);
}

/* Imprime
Lista de Carros
[
  {
    marca: 'BYD',
    modelo: 'Dolphin Mini',
    ano: 2025,
    cor: 'Rosa',
    quantidade_portas: 4,
    automatico: true
  },
  {
    marca: 'Volkswagen',
    modelo: 'Gol',
    ano: 2013,
    cor: 'Branco',
    quantidade_portas: 2,
    automatico: false
  },
  {
    marca: 'Ford',
    modelo: 'Fiesta',
    ano: 1999,
    cor: 'Vermelho',
    quantidade_portas: 4,
    automatico: false
  }
]
O primeiro carro da lista é um BYD Dolphin Mini.
O Fiesta possui câmbio manual. */
