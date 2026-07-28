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

usuarios.forEach(usuario => {
    usuario.maior_idade = usuario.idade > 17;
});

console.log("Resultado");
console.log(usuarios);

/* Imprime 
Resultado
[
  { nome: 'João', idade: 25, maior_idade: true },
  { nome: 'Ana', idade: 18, maior_idade: true },
  { nome: 'Beatriz', idade: 15, maior_idade: false },
  { nome: 'Carlos', idade: 16, maior_idade: false },
  { nome: 'Antonio', idade: 32, maior_idade: true }
]
*/

// Outros exemplos
const usuarios = [
    {
        nome: "Carlos",
        idade: 30,
    },
    {
        nome: "Paulo",
        idade: 15,
    },
{
        nome: "Mariane",
        idade: 42,
    },
]
usuarios.forEach(usuario => {
    usuario.maior_idade = usuario.idade > 17;
});

console.log("Resultado");
console.log(usuarios);

/* Imprime
Resultado
[
  { nome: 'Carlos', idade: 30, maior_idade: true },
  { nome: 'Paulo', idade: 15, maior_idade: false },
  { nome: 'Mariane', idade: 42, maior_idade: true }
]
*/ 

