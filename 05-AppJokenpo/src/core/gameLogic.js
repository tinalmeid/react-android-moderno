/**
 * @file gameLogic.js
 * @description Lógica das Regras do jogo Jokenpo (Pedra, Papel, Tesoura).
 * @module core/gameLogic
 *
 * @author Tina Almeida
 * @date 2025-01-18
 * Tasks: ENG-649 Componentização do App Jokenpo
 */

/**
 * Determina o vencedor do jogo Jokenpo com base nas escolhas do jogador e do computador.
 * @param {string} userChoiceId - ID da escolha do jogador ("rock", "paper", ou "scissors").
 * @param {string} cpuChoiceId - ID da escolha do computador ("rock", "paper", ou "scissors").
 * @returns {string} - Retorna 'WIN' se o jogador vencer, 'LOSE' se o jogador perder, ou 'DRAW' em caso de empate.
 */

export const getGameResult = (userChoiceId, cpuChoiceId) => {
  if (userChoiceId === cpuChoiceId) {
    return "DRAW";
  }

  const rules = {
    rock: "scissors", // Pedra vence Tesoura
    paper: "rock", // Papel vence Pedra
    scissors: "paper", // Tesoura vence Papel
  };

  // Se a escolha do usuário vence a escolha do computador
  if (rules[userChoiceId] === cpuChoiceId) {
    return "WIN";
  }

  return "LOSE";
};

/**
 * Escolhe uma opção aleatória para o computador.
 * @param {Array} choices - Array de objetos de escolha disponíveis.
 * @returns {Object} - Retorna o objeto de escolha selecionado aleatoriamente.
 */
export const getRandomChoice = (choices) => {
  // NOSONAR no final da linha para ignorar alerta de criptografia fraca
  const randomIndex = Math.floor(Math.random() * choices.length); // NOSONAR
  return choices[randomIndex];
};
