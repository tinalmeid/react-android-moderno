/**
 * @file gameLogic.test.js
 * @description Testes unitários para a lógica do jogo Jokenpo (Pedra, Papel, Tesoura).
 * @module tests/gameLogic.test
 *
 * @author Tina Almeida
 * @date 2025-01-18
 * Tasks: ENG-649 Componentização do App Jokenpo
 */

import { getGameResult, getRandomChoice } from "../core/gameLogic.js";
import { CHOICES } from "../data/choices.js";

describe("Lógica do jogo Jokenpo", () => {
  // Teste para empate
  it("Deve retornar 'DRAW' quando ambas as escolhas forem iguais", () => {
    expect(getGameResult("rock", "rock")).toBe("DRAW");
    expect(getGameResult("paper", "paper")).toBe("DRAW");
    expect(getGameResult("scissors", "scissors")).toBe("DRAW");
  });

  // Testes para vitória do jogador
  it("Deve retornar 'WIN' quando o jogador vencer", () => {
    expect(getGameResult("rock", "scissors")).toBe("WIN"); // Pedra vence Tesoura
    expect(getGameResult("paper", "rock")).toBe("WIN"); // Papel vence Pedra
    expect(getGameResult("scissors", "paper")).toBe("WIN"); // Tesoura vence Papel
  });

  // Testes para derrota do jogador
  it("Deve retornar 'LOSE' quando o jogador perder", () => {
    expect(getGameResult("rock", "paper")).toBe("LOSE"); // Pedra perde para Papel
    expect(getGameResult("paper", "scissors")).toBe("LOSE"); // Papel perde para Tesoura
    expect(getGameResult("scissors", "rock")).toBe("LOSE"); // Tesoura perde para Pedra
  });
});

describe("Escolha aleatória do computador", () => {
  // Teste para verificar se retorna um item válido
  it("Deve retornar uma escolha válida do array", () => {
    const choice = getRandomChoice(CHOICES);
    expect(CHOICES).toContainEqual(choice);
  });

  // Teste para verificar estrutura do objeto retornado
  it("Deve retornar um objeto com propriedades id, name e icon", () => {
    const choice = getRandomChoice(CHOICES);
    expect(choice).toHaveProperty("id");
    expect(choice).toHaveProperty("name");
    expect(choice).toHaveProperty("icon");
  });

  // Teste para verificar que sempre retorna uma escolha válida
  it("Deve sempre retornar uma escolha válida em múltiplas chamadas", () => {
    const validIds = CHOICES.map((c) => c.id);
    for (let i = 0; i < 10; i++) {
      const choice = getRandomChoice(CHOICES);
      expect(validIds).toContain(choice.id);
    }
  });
});
