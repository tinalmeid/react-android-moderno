const SorteioService = require("./SorteioService");

describe("SorteioService - Regra de Negócio", () => {
  /**
   *  Teste de validação de Intervalo
   *  Garante que o número sorteado esteja dentro do intervalo definido (0  a 10).
   *
   *  @author Tina de Almeida
   *  @date 2026-11-01
   *  Task: ENG-645 Fundamento e App1 - Sorteio de Números
   */
  it("deve sortear um número entre 0 e 10", () => {
    const min = 0;
    const max = 10;

    // Executamos o sorteio várias vezes para garantir estaticamente
    for (let i = 0; i < 100; i++) {
      const numeroSorteado = SorteioService.sortearNumero(min, max);

      expect(numeroSorteado).toBeGreaterThanOrEqual(min);
      expect(numeroSorteado).toBeLessThanOrEqual(max);
    }
  });

  /**
   * Teste de Tipo
   * Garante que o número sorteado seja do tipo numero inteiro, não uma string ou float.
   *
   * @author Tina de Almeida
   * @date 2026-11-01
   * Task: ENG-645 Fundamento e App1 - Sorteio de Números
   */
  it("deve sortear um número inteiro", () => {
    const numeroSorteado = SorteioService.sortearNumero(0, 10);
    expect(Number.isInteger(numeroSorteado)).toBe(true);
  });

  /**
   * Teste de Erro para Intervalo Inválido
   * Garante que uma exceção seja lançada quando o valor mínimo for maior que o valor máximo.
   *
   * @author Tina de Almeida
   * @date 2026-11-01
   * Task: ENG-645 Fundamento e App1 - Sorteio de Números
   */
  it("deve lançar um erro se o valor mínimo for maior que o valor máximo", () => {
    // Se esperamos que uma função lance um erro, devemos envolvê-la em outra função anônima.
    expect(() => {
      SorteioService.sortearNumero(50, 10); // Erro proposital: min(50) > max(10)
    }).toThrow("O valor mínimo não pode ser maior que o valor máximo.");
  });

  /**
   * Teste de Intervalo Personalizado
   * Garante que o sorteio funcione corretamente para intervalos personalizados.
   *
   * @author Tina de Almeida
   * @date 2026-11-01
   * Task: ENG-645 Fundamento e App1 - Sorteio de Números
   */
  it("deve sortear um número dentro de um intervalo personalizado", () => {
    const min = 2;
    const max = 7;

    for (let i = 0; i < 10; i++) {
      const numeroSorteado = SorteioService.sortearNumero(min, max);

      expect(numeroSorteado).toBeGreaterThanOrEqual(min);
      expect(numeroSorteado).toBeLessThanOrEqual(max);
    }
  });

  /**
   * Teste de Intervalo Padrão (Default Parameters)
   * Garante que o sorteio funcione corretamente quando nenhum parâmetro for fornecido.
   *
   * @author Tina de Almeida
   * @date 2026-11-01
   * Task: ENG-645 Fundamento e App1 - Sorteio de Números
   */
  it("deve usar os valores padrão entre 0 e 10 quando nenhum parâmetro for fornecido", () => {
    const numeroSorteado = SorteioService.sortearNumero(); // Chamada sem parâmetros

    expect(numeroSorteado).toBeGreaterThanOrEqual(0);
    expect(numeroSorteado).toBeLessThanOrEqual(10);
  });
});
