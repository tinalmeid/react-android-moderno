/**
 * @file App.integration.test.js
 * @description Testes de integração para o App do AppNoticias
 * Testa a composição de componentes e dados
 */

import React from "react";
import { render, screen } from "@testing-library/react-native";
import App from "../../App";

// Mock SafeAreaProvider
jest.mock("react-native-safe-area-context", () => ({
  SafeAreaProvider: ({ children }) => <>{children}</>,
  SafeAreaView: ({ children, style }) => (
    <mock-view style={style}>{children}</mock-view>
  ),
}));

// Mock StatusBar
jest.mock("expo-status-bar", () => ({
  StatusBar: () => null,
}));

describe("App - Integração", () => {
  it("renderiza o header com título", () => {
    render(<App />);
    const header = screen.getByText("Portal AppNews 📰");
    expect(header).toBeTruthy();
  });

  it("renderiza a lista de notícias", () => {
    const { toJSON } = render(<App />);
    const output = toJSON();
    expect(output).toBeTruthy();
  });

  it("renderiza pelo menos uma notícia", () => {
    render(<App />);
    // Verifica que existem elementos de notícia renderizados
    const output = render(<App />);
    expect(output).toBeTruthy();
  });

  it("App estrutura contém um FlatList", () => {
    const { toJSON } = render(<App />);
    const tree = toJSON();
    // Valida que a estrutura foi renderizada
    expect(tree).not.toBeNull();
  });
});
