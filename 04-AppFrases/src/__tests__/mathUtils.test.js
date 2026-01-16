/**
 * @file mathUtils.test.js
 * @description Testes unitários para as funções matemáticas utilitárias.
 *
 * @module tests/mathUtils.test
 * @author Tina Almeida
 * @date 2025-01-15
 * Task: ENG-648 App Frases Motivacionais
 */
import { getRandomIndex } from "../core/mathUtils";

describe("Core Logic: MathUtils", () => {
  it("deve retornar 0 se o valor máximo for inválido (0 ou negativo)", () => {
    expect(getRandomIndex(0)).toBe(0);
    expect(getRandomIndex(-5)).toBe(0);
  });

  it("deve retornar um índice dentro do intervalo válido", () => {
    const max = 5;
    const index = getRandomIndex(max);

    // O índice de ser >= 0 e < que o max
    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThan(max);
  });
});
