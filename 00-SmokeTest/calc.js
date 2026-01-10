/**
 * Realiza operações matemáticas básicas.
 * Módulo criado para validar o pipeline de testes e cobertura (smoke test)
 */

/**
 * Soma dois números inteiros.
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O resultado da soma.
 * @example
 * const resultado = sum(1, 2); // retorna 3
 */
function sum(a, b) {
  return a + b;
}

/**
 * Subtrai o segundo número do primeiro.
 * @param {number} a - O número total.
 * @param {number} b - O valor a ser subtraído.
 * @returns {number} O resultado da subtração.
 */
function sub(a, b) {
  return a - b;
}

module.exports = { sum, sub };
