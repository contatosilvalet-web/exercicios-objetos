const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const jovens = [];
const adultos = [];

for (const usuario of usuarios) {
    if (usuario.idade < 18) {
        jovens.push(usuario);
    } else {
        adultos.push(usuario);
    }
}


console.log("Jovens");
console.log(jovens);

console.log("\n Adultos");
console.log(adultos);

/* Imprime
Jovens
[ { nome: 'Beatriz', idade: 15 }, { nome: 'Carlos', idade: 16 } ]

 Adultos
[
  { nome: 'João', idade: 25 },
  { nome: 'Ana', idade: 18 },
  { nome: 'Antonio', idade: 32 }
]

*/

// Outro exemplo
const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const jovens = usuarios.filter(usuario => usuario.idade < 18);
const adultos = usuarios.filter(usuario => usuario.idade >= 18);

console.log("Jovens");
console.log(jovens);

console.log("\n Adultos");
console.log(adultos);

/* Imprime 
Jovens
[ { nome: 'Beatriz', idade: 15 }, { nome: 'Carlos', idade: 16 } ]

 Adultos
[
  { nome: 'João', idade: 25 },
  { nome: 'Ana', idade: 18 },
  { nome: 'Antonio', idade: 32 }
]
*/

