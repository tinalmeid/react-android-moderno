/**
 * @file calculator.js
 * @description Funções de cálculo para o consumo de combustível.
 * @module core/calculator
 *
 * @author Tina Almeida
 * @date 2026-01-19
 * Tasks: ENG-650 Formulario e Inputs App de Combustível
 */

/**
 * Calcula qual o combustível é mais econômico.
 * Regra: O álcool é vantajoso se o preço for até 70% do preço da gasolina.
 * @param {number} alcoholPrice - Preço do álcool.
 * @param {number} gasPrice - Preço da gasolina.
 * @returns {object} Resultado contendo qual combustível é mais econômico, mensagem e a razão calculada.
 * @example
 * calculateBestFuel(3.50, 5.00); // {type: 'ALCOHOL', ratio: 0.7, message: 'Abasteça com Álcool'}
 */

export function calculateBestFuel(alcoholPrice, gasPrice) {
  // Validando entradas
  if (alcoholPrice <= 0 || gasPrice <= 0) {
    return {
      type: "INVALID",
      ratio: 0,
      message:
        "🔴 Preços inválidos. Ambos os preços devem ser maiores que zero.",
    };
  }

  // Lógica matemática
  const rawRatio = alcoholPrice / gasPrice;
  const isAlcoholAdvantageous = rawRatio <= 0.7;

  // Formatamos para 3 casas decimais e convertendo para Number
  const formattedRatio = Number.parseFloat(rawRatio.toFixed(3));

  if (isAlcoholAdvantageous) {
    return {
      type: "ALCOHOL",
      ratio: formattedRatio,
      message: "Compensa usar Álcool 🌿",
    };
  } else {
    return {
      type: "GASOLINE",
      ratio: formattedRatio,
      message: "Compensa usar Gasolina ⛽",
    };
  }
}
