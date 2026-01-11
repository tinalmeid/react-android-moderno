/**
 *  Serviço responsável pela lógica de sorteio aleatório de números.
 *  Segue o principio  de responsabilidade única (SRP) da arquitetura SOLID.
 *
 * @author Tina de Almeida
 * @date 2026-11-01
 * Task: ENG-645 Fundamento e App1 - Sorteio de Números
 */
const SorteioService = {
  /**
   * Gera um número aleatório entre o intervalo definido (inclusivo).
   *
   * @param {number} min - O valor mínimo do intervalo.
   * @param {number} max - O valor máximo do intervalo.
   * @return {number} - Número aleatório sorteado.
   */
  sortearNumero: (min = 0, max = 10) => {
    if (min > max) {
      throw new Error("O valor mínimo não pode ser maior que o valor máximo.");
    }

    // Lógica matemática: math.random gera um número entre 0 (inclusivo) e 1 (exclusivo).
    // Multiplicamos pela range e arredondamos para baixo com floor.
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

module.exports = SorteioService;
