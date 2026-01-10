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

  // Teste adicional para garantir que a soma de números negativos funciona corretamente
  it("deve somar -1 + -1 e retornar -2", () => {
    const resultado = sum(-1, -1);
    expect(resultado).toBe(-2);
  });

  // Teste adicional para garantir que a subtração de números negativos funciona corretamente
  it("deve subtrair -2 - -1 e retornar -1", () => {
    const resultado = sub(-2, -1);
    expect(resultado).toBe(-1);
  });
});
