const { sum, sub } = require("./calc");

describe("Smoke Test - Calc Module", () => {
  // Teste para a função de soma
  it("deve somar 2 + 3 e retornar 5", () => {
    const resultado = sum(2, 3);
    expect(resultado).toBe(5);
  });

  // Teste para a função de subtração
  it("deve subtrair 5 - 2 e retornar 3", () => {
    const resultado = sub(5, 2);
    expect(resultado).toBe(3);
  });
});
