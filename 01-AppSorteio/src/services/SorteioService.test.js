/**
 * @file SorteioService.test.js
 * @description Testes unitários para o serviço de sorteio de números.
 * Garante a integridade da lógica de negócio implementada no SorteioService.
 * @see SorteioService.js
 *
 * @author Tina de Almeida
 * @date 2026-11-01
 * Task: ENG-645 Fundamento e App1 - Sorteio de Números
 */

const SorteioService = require("./SorteioService");

describe("SorteioService - Regra de Negócio", () => {
  // 1. Teste de Intervalo Padrão
  it("1. deve sortear um número entre 0 e 10", () => {
    const min = 0;
    const max = 10;

    // Executamos o sorteio várias vezes para garantir estaticamente
    for (let i = 0; i < 100; i++) {
      const numeroSorteado = SorteioService.sortearNumero(min, max);

      expect(numeroSorteado).toBeGreaterThanOrEqual(min);
      expect(numeroSorteado).toBeLessThanOrEqual(max);
    }
  });

  // 2. Teste de Tipo do Retorno
  it("2. deve sortear um número inteiro", () => {
    const numeroSorteado = SorteioService.sortearNumero(0, 10);
    expect(Number.isInteger(numeroSorteado)).toBe(true);
  });

  // 3. Teste de Erro para Intervalo Inválido
  it("3. deve lançar um erro se o valor mínimo for maior que o valor máximo", () => {
    // Se esperamos que uma função lance um erro, devemos envolvê-la em outra função anônima.
    expect(() => {
      SorteioService.sortearNumero(50, 10); // Erro proposital: min(50) > max(10)
    }).toThrow("O valor mínimo não pode ser maior que o valor máximo.");
  });

  // 4. Teste de Intervalo Personalizado
  it("4. deve sortear um número dentro de um intervalo personalizado", () => {
    const min = 2;
    const max = 7;

    for (let i = 0; i < 10; i++) {
      const numeroSorteado = SorteioService.sortearNumero(min, max);

      expect(numeroSorteado).toBeGreaterThanOrEqual(min);
      expect(numeroSorteado).toBeLessThanOrEqual(max);
    }
  });

  // 5. Teste de Valores Padrão
  it("5. deve usar os valores padrão entre 0 e 10 quando nenhum parâmetro for fornecido", () => {
    const numeroSorteado = SorteioService.sortearNumero(); // Chamada sem parâmetros

    expect(numeroSorteado).toBeGreaterThanOrEqual(0);
    expect(numeroSorteado).toBeLessThanOrEqual(10);
  });
});
