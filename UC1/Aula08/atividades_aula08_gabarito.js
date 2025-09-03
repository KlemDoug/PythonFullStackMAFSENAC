/**
 * Tarefa 1: Imprime uma linha separadora no console.
 */
function mostrarLinha() {
  console.log("--------------------");
}

/**
 * Tarefa 2: Calcula um bônus de 10% sobre um salário.
 */
function calcularBonus(salario) {
  const bonus = salario * 0.10;
  return bonus;
}

/**
 * Tarefa 3: Gera uma mensagem de boas-vindas personalizada.
 */
function gerarMensagemBoasVindas(nome, setor) {
  // Usando template literals (crases ``) para facilitar a formatação da string.
  return `Bem-vindo(a), ${nome}! Você foi alocado(a) ao setor de ${setor}.`;
}

// 1. Chame mostrarLinha().
mostrarLinha();

// 2. Chame gerarMensagemBoasVindas() e imprima o resultado.
const mensagemDeBoasVindas = gerarMensagemBoasVindas("Ana", "Tecnologia");
console.log(mensagemDeBoasVindas);

// 3. Chame calcularBonus() e imprima o resultado formatado.
const salarioDoFuncionario = 5000;
const bonusCalculado = calcularBonus(salarioDoFuncionario);
console.log(`Seu bônus será de R$ ${bonusCalculado}.`);

// 4. Chame mostrarLinha() novamente no final.
mostrarLinha();