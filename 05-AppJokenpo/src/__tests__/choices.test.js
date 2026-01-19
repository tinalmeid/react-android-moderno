/**
 * @file choices.test.js
 * @description Testes unitários para os dados das opções do jogo Jokenpo.
 * @module tests/choices.test
 *
 * @author Tina Almeida
 * @date 2026-01-18
 * Task: ENG-649 Componentização do App Jokenpo
 */

import { CHOICES } from "../data/choices.js";

describe("AppJokenpo - Dados do jogo Jokenpo", () => {
  // Teste para verificar quantidade de opções
  it("Deve ter 3 opções de escolha disponíveis", () => {
    expect(CHOICES).toHaveLength(3);
  });

  // Teste para verificar estrutura dos dados
  it("Cada opção deve ter id, label e icon", () => {
    CHOICES.forEach((choice) => {
      expect(choice).toHaveProperty("id");
      expect(choice).toHaveProperty("label");
      expect(choice).toHaveProperty("icon");
    });
  });

  // Teste para verificar opções específicas
  it("Deve ter as opções rock, paper e scissors", () => {
    const ids = CHOICES.map((choice) => choice.id);
    expect(ids).toContain("rock");
    expect(ids).toContain("paper");
    expect(ids).toContain("scissors");
  });
});
