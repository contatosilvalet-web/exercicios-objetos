const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
    
];

for (const usuario of usuarios) {
    const { nome, pets } = usuario;
    const qtdPets = pets.length;


    if (qtdPets === 0) {
        console.log(`Sou ${nome} e não tenho pets`);
    } else if (qtdPets === 1) {
        console.log(`Sou ${nome} e tenho 1 pet`);
    } else {
        console.log(`Sou ${nome} e tenho ${qtdPets} pets`);
    }
}

/* Imprime
Sou João e não tenho pets
Sou Ana e tenho 2 pets
Sou Beatriz e tenho 1 pet
Sou Carlos e tenho 3 pets
Sou Antonio e tenho 1 pet
*/

// Outros exemplos
const usuarios = [
    {
        nome: "Carlos",
        pets: ["Mimi", "Lola"],
    },
    {
        nome: "Luiz",
        pets: ["Toddy", "Teodoro"],
    },
    {
        nome: "Fernanda",
        pets: [],
    },
    {
        nome: "Ana Carolina",
        pets: [],
    },
    {
        nome: "Pietra",
        pets: ["Bolota", "Estopinha", "Lily", "Camafeu", "Cristal"],
    },
    
];

for (const usuario of usuarios) {
    const { nome, pets } = usuario;
    const qtdPets = pets.length;


    if (qtdPets === 0) {
        console.log(`Sou ${nome} e não tenho pets`);
    } else if (qtdPets === 1) {
        console.log(`Sou ${nome} e tenho 1 pet`);
    } else {
        console.log(`Sou ${nome} e tenho ${qtdPets} pets`);
    }
}

/* Imprime 
Sou Carlos e tenho 2 pets
Sou Luiz e tenho 2 pets
Sou Fernanda e não tenho pets
Sou Ana Carolina e não tenho pets
Sou Pietra e tenho 5 pets */
