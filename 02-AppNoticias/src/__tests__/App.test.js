/**
 * @file NoticiaCard.test.js
 * @description Testes unitários para o componente NoticiaCard.
 * Garante que o componente renderize corretamente com diferentes props e
 * manipule casos de borda adequadamente.
 * @see ../components/NoticiaCard.js
 *
 * @author Tina de Almeida
 * @date 2026-11-01
 * Task: ENG-646 Layouts Básicos e App 2 (Portal de Notícias)
 */

import React from "react";
import { render } from "@testing-library/react-native";
import App from "../../App.js";

// Mock para evitar erros de navegação ou ícones externos
jest.mock("@expo/vector-icons", () => ({
  Ionicons: "",
}));

describe("App Component - Renderização e Comportamento", () => {
  // 1. Teste de Renderização do Header
  it("1. deve renderizar o header com o título correto", () => {
    const { getByText } = render(<App />);
    expect(getByText("Portal AppNews 📰")).toBeTruthy();
  });

  // 2. Teste de Renderização FlatList e o primeiro item da noticia
  it("2. deve renderizar a FlatList e o primeiro item da notícia", () => {
    // Busca os métodos de procura
    const { getByTestId, getByText } = render(<App />);

    // 1. Verifica se o comportamento da lista (FlatList) está na tela
    expect(getByTestId("flatlist-noticias")).toBeTruthy();

    // 2. Verifica se o dado foi renderizado na tela
    expect(
      getByText("Futebol: Cruzeiro vence clássico com golaço, no Mineirão")
    ).toBeTruthy();
  });
});
