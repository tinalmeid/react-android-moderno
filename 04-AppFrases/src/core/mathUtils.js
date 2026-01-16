/**
 * @file mathUtils.js
 * @description Funções matemáticas utilitárias para o domínio da aplicação.
 *
 * @module core/mathUtils
 * @author Tina Almeida
 * @date 2025-01-15
 * Task: ENG-648 App Frases Motivacionais
 */

/**
 * Gera um índice aleatório baseado no tamanho fornecido.
 * @param {number} max - O tamanho máximo para o índice.
 * @returns {number} Um índice aleatório entre 0 e max - 1.
 */

export const getRandomIndex = (max) => {
  // Proteção contra valores inválidos
  if (!max || max <= 0) {
    return 0;
  }

  return Math.floor(Math.random() * max);
};
