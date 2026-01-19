/**
 * @file calculator.tests.js
 * @description Testes unitários para a lógica de cálculo do aplicativo de controle de combustível.
 * @module tests/calculator.tests
 *
 * @author Tina Almeida
 * @date 2026-01-19
 * Tasks: ENG-650 Formulario e Inputs App de Combustível
 */
import { calculateBestFuel } from "../core/calculator.js";

describe("AppCombustivel - Função de cálculo do combustível mais econômico", () => {
  // Teste para álcool mais econômico
  it("deve recomendar ALCOHOL quando a razão for menor ou igual a 0.7", () => {
    const result = calculateBestFuel(3.5, 5);
    expect(result.type).toBe("ALCOHOL");
    expect(result.ratio).toBeCloseTo(0.7, 3);
    expect(result.message).toBe("Compensa usar Álcool 🌿");
  });

  // Teste para gasolina mais econômica
  it("deve recomendar GASOLINE quando a razão for maior que 0.7", () => {
    const result = calculateBestFuel(4, 5);
    expect(result.type).toBe("GASOLINE");
    expect(result.ratio).toBeCloseTo(0.8, 3);
    expect(result.message).toBe("Compensa usar Gasolina ⛽");
  });

  // Teste para preços inválidos
  it("deve retornar INVALID quando algum preço for menor ou igual a zero", () => {
    const result = calculateBestFuel(0, 5);
    expect(result.type).toBe("INVALID");
    expect(result.ratio).toBe(0);
    expect(result.message).toBe(
      "🔴 Preços inválidos. Ambos os preços devem ser maiores que zero."
    );
  });
});
