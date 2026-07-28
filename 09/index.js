const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
]

for (let i = 0; i < participantes.length; i++) {
    if (participantes[i].nome === "Carlos") {
        
        const posicao = i + 1;
        
        console.log(`Galera... O Carlos está na posição ${posicao}, corre lá!`);
        
        break; 
    }
}

/* Imprime
Galera... O Carlos está na posição 10, corre lá! */

// Outro exemplo
const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Verônica" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
    { nome: "André" },
    { nome: "Sophia" },
    { nome: "Lucia" },
    { nome: "Tiago" },
    { nome: "Carlos" },
    { nome: "Thomaz" },
]

for (let i = 0; i < participantes.length; i++) {
    if (participantes[i].nome === "Carlos") {
        
        const posicao = i + 1;
        
        console.log(`Galera... O Carlos está na posição ${posicao}, corre lá!`);
        
        break; 
    }
}

/* Imprime
Galera... O Carlos está na posição 23, corre lá!
*/

const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Carlos" },
    { nome: "Thomaz" },
]

for (let i = 0; i < participantes.length; i++) {
    if (participantes[i].nome === "Carlos") {
        
        const posicao = i + 1;
        
        console.log(`Galera... O Carlos está na posição ${posicao}, corre lá!`);
        
        break; 
    }
}

/* Imprime
Galera... O Carlos está na posição 4, corre lá! */
