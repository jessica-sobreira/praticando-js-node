// Desenvolva um algoritmo que preenche um vetor com os 4
// primeiros números perfeitos.

let perfeitos = [];

let numero = 1;

while (perfeitos.length < 4) {
    let somaDosDivisores = 0;

    for (let i = 1; i < numero; i++) {
        if(numero % i === 0) {
            somaDosDivisores += i;

        }
    }

    if (somaDosDivisores === numero) {
        perfeitos.push(numero);
        
    }
    numero++

}

console.log(perfeitos);