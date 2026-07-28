const endereco = {
  rua: "Avenida Paulista",
  numero: 1578,
  complemento: "Apto 02",
  bairro: "Bela Vista",
  cep: "01310-200",
  cidade: "São Paulo",
  estado: "SP",
  pais: "Brasil"
};

const usuario = {
  nome: "Sophia Brandão Class",
  email: "class_sophiabrandao123@gmail.com",
  telefone: "(11) 3149-5959",
  data_nascimento: "18/02/1999",
  endereco: endereco 
};

console.log("Dados do Usuário");
console.log(usuario);

console.log(`\nO usuário ${usuario.nome} mora na cidade de ${usuario.endereco.cidade}.`);

/* Imprime
Dados do Usuário
{
  nome: 'Sophia Brandão Class',
  email: 'class_sophiabrandao123@gmail.com',
  telefone: '(11) 3149-5959',
  data_nascimento: '18/02/1999',
  endereco: {
    rua: 'Avenida Paulista',
    numero: 1578,
    complemento: 'Apto 02',
    bairro: 'Bela Vista',
    cep: '01310-200',
    cidade: 'São Paulo',
    estado: 'SP',
    pais: 'Brasil'
  }
}

O usuário Sophia Brandão Class mora na cidade de São Paulo. */ 

// Outro exemplo
const endereco = {
  rua: "Rua Engenheiro Ostoja Roguski",
  numero: 350,
  complemento: "",
  bairro: "Jardim Botânico",
  cep: "80210-391",
  cidade: "Curitiba",
  estado: "PR",
  pais: "Brasil"
};

const usuario = {
  nome: "Luis Carlos Vendrão",
  email: "luisinho_vendrao@hotmail.com",
  telefone: "(41) 3362-1800",
  data_nascimento: "06/01/1964",
  endereco: endereco 
};

console.log("Dados do Usuário");
console.log(usuario);

console.log(`\nO usuário ${usuario.nome} mora na cidade de ${usuario.endereco.cidade}.`);

/* Imprime
Dados do Usuário
{
  nome: 'Luis Carlos Vendrão',
  email: 'luisinho_vendrao@hotmail.com',
  telefone: '(41) 3362-1800',
  data_nascimento: '06/01/1964',
  endereco: {
    rua: 'Rua Engenheiro Ostoja Roguski',
    numero: 350,
    complemento: '',
    bairro: 'Jardim Botânico',
    cep: '80210-391',
    cidade: 'Curitiba',
    estado: 'PR',
    pais: 'Brasil'
  }
}

O usuário Luis Carlos Vendrão mora na cidade de Curitiba. */
