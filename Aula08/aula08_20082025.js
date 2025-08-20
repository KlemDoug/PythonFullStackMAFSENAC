/////////////////////////////////////////////////////
//   Introdução a Funções em JavaScript - Aula 8   //
/////////////////////////////////////////////////////

// O que é uma Função e por que usar?

// Reutilização: Escreva uma vez, use quantas vezes quiser.
// Organização: Seu código fica mais limpo, mais legível e dividido em blocos lógicos.
// Manutenção: Se precisar corrigir ou alterar uma tarefa, você só muda o código dentro da função.

// Construção:

// Palavra-chave   NomeDaFunção ( Parâmetros ) {
//
function           somarDoisNumeros(  num1, num2  ) {
    // Corpo da função: o que ela faz
    let resultado = num1 + num2;
    
    // Palavra-chave para "devolver" um valor
    return resultado;
}
//
// }

// function: A palavra-chave que diz ao JavaScript: "Ei, estou criando uma função!".

// somarDoisNumeros: O nome que damos à nossa função. A convenção em JavaScript é usar camelCase (a primeira palavra minúscula e as seguintes com a primeira letra maiúscula).

// (num1, num2): Os parâmetros. São como "caixas vazias" que esperam receber valores quando a função for chamada.

// { ... }: O corpo da função. Todo o código que a função vai executar fica aqui dentro.

// return: A palavra-chave que envia um valor de volta para quem chamou a função.


// Exemplos Práticos:

// 1: Uma função que apenas faz algo (sem parâmetros, sem retorno)
// Esta função não precisa de ingredientes e não devolve nada. Ela simplesmente executa uma ação e está sendo DECLARADA.

function mostrarCabecalho() {
    console.log("=======================================");
    console.log("==      BEM-VINDO AO SISTEMA         ==");
    console.log("=======================================");
}

// CHAMANDO a função: Agora mandamos o JavaScript executá-la.
console.log("Iniciando o programa...");
mostrarCabecalho(); // A mágica acontece aqui!
console.log("O programa continua...");
mostrarCabecalho(); // Podemos chamar de novo!



// 2: Uma função que recebe dados (parâmetros) e faz algo com eles
// Agora, nossa função pode receber dados para trabalhar.

// O parâmetro 'nomeUsuario' é uma variável que só existe dentro desta função.
function darBoasVindas(nomeUsuario) {
    console.log(`Olá, ${nomeUsuario}! Seja bem-vindo(a) à nossa aula.`);
}

// Chamando a função e passando os ARGUMENTOS.
// 'Maria' é o argumento que vai preencher o parâmetro 'nomeUsuario'.
darBoasVindas("Maria");
darBoasVindas("João");

// Os valores que você envia ao chamar a função ("Maria", "João") são chamados de argumentos.



// 3: Uma função que calcula e devolve um valor (return) para quem a chamou

// Esta função recebe dois números e promete DEVOLVER a soma deles.
function somar(numeroA, numeroB) {
    let resultadoSoma = numeroA + numeroB;
    return resultadoSoma; // A função "se transforma" nesse valor.
}
// Para usar o valor, precisamos guardá-lo em uma variável.
// A variável 'somaFinal' vai receber o valor que a função 'somar' retornou.
let somaFinal = somar(10, 5);

console.log(`O resultado da soma é: ${somaFinal}`);

// Também podemos usar o retorno diretamente em outro lugar.
console.log(`O resultado de 100 + 50 é: ${somar(100, 50)}`);

