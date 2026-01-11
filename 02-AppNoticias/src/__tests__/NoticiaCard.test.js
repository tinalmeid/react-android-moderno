/**
 * @file
 * @description Testes unitários para o componente NoticiaCard.
 * Garante que o componente renderize corretamente com os dados fornecidos.
 * @see ../components/NoticiaCard.js
 *
 * @author Tina de Almeida
 * @date 2026-11-01
 * Task: ENG-646 Layouts Básicos e App 2 (Portal de Notícias)
 */

import React from "react";
import { render } from "@testing-library/react-native";
import NoticiaCard from "../components/NoticiaCard.js";

// Arrange: Dados de teste para o componente NoticiaCard (mock data).
const MOCK_ITEM = {
  id: 1,
  titulo: "Futebol: Cruzeiro vence clássico com golaço, no Mineirão",
  data: "11 Jan 2026",
  imagem:
    "https://sportbuzz.com.br/wp-content/uploads/2025/09/cruzeiro-vence-atletico-mg-com-show-de-kaio-jorge-e-vai-as-semis.jpg?w=500",
  resumo: "A Raposa dominou o clássico do início ao fim...",
};

describe("NoticiaCard Component - Renderização e Comportamento", () => {
  // 1. Teste de Renderização Básica
  // Verifica se os elementos principais são exibidos quando o componente é renderizado com dados válidos.
  it("1. deve renderizar corretamente o título e o resumo da notícia", () => {
    // Act: Renderiza o componente com o item de teste.
    const { getByText } = render(<NoticiaCard item={MOCK_ITEM} />);

    // Assert: Verifica se o título e o resumo estão presentes na tela.
    expect(
      getByText("Futebol: Cruzeiro vence clássico com golaço, no Mineirão")
    ).toBeTruthy();
    expect(
      getByText("A Raposa dominou o clássico do início ao fim...")
    ).toBeTruthy();
  });

  // 2. Teste de Renderização da Imagem
  // Verifica se a imagem é renderizada corretamente com a URL fornecida.
  it("2. deve renderizar a imagem da notícia com a URL correta", () => {
    // Act: Renderiza o componente com o item de teste.
    const { UNSAFE_getByType } = render(<NoticiaCard item={MOCK_ITEM} />);

    // Assert: Verifica se a imagem está presente e com a URL correta.
    const Image = require("react-native").Image;
    const imagem = UNSAFE_getByType(Image);
    expect(imagem.props.source.uri).toBe(MOCK_ITEM.imagem);
  });

  // 3. Testes de Resiliência a Dados Inválidos (Fail Fast / Edge Cases)
  // Garante que o componente respeita o princípio de não quebrar a UI quando recebe dados inválidos ou nulos.
  it('3. deve retornar null (não renderizar nada) se a prop "item" for nula ou indefinida', () => {
    // Act: Renderiza o componente com item nulo.
    const { toJSON } = render(<NoticiaCard item={null} />);

    // Assert: Verifica se o componente não renderiza nada (retorna null).
    expect(toJSON()).toBeNull();
  });

  // 4. Teste de Acessibilidade
  // Verifica se o componente possui labels adequados para acessibilidade (TalkBack/VoiceOver).
  it("4. deve possuir labels de acessibilidade para a imagem e o container da notícia", () => {
    // Act: Renderiza o componente com o item de teste.
    const { getByLabelText, UNSAFE_getByType } = render(
      <NoticiaCard item={MOCK_ITEM} />
    );

    // Assert: Verifica o container do card tem a descrição correta.
    expect(
      getByLabelText(
        "Notícia: Futebol: Cruzeiro vence clássico com golaço, no Mineirão"
      )
    ).toBeTruthy();
    // Verifica se a imagem tem o accessibilityRole correto.
    const Image = require("react-native").Image;
    const imagem = UNSAFE_getByType(Image);
    expect(imagem.props.accessibilityRole).toBe("image");
  });
});
