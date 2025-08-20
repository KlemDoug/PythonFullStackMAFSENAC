const prompt = require("prompt-sync")();
// 1. Cálculo de Média de Notas:
// Peça ao usuário que insira 4 notas (de 0 a 10). Calcule a média das notas e exiba o resultado.
// Se a média for maior ou igual a 7, exiba "Aprovado". Caso contrário, exiba "Reprovado".

function calcularMedia() {
    let soma = 0;
    for (let i = 0; i < 4; i++) {
        let nota = parseFloat(prompt(`Digite a ${i + 1}ª nota:`));
        soma += nota;
    }
    let media = soma / 4;
    console.log("Média:", media);
    if (media >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

// Chamada da função
calcularMedia();