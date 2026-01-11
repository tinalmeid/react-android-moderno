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
import TestRenderer from "react-test-renderer";
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

const MOCK_ITEM_ALTERNATIVE = {
  id: 2,
  titulo: "Tecnologia: Novo smartphone revoluciona mercado",
  data: "10 Jan 2026",
  imagem: "https://example.com/smartphone.jpg",
  resumo: "Lançamento surpreende indústria com inovações...",
};

const MOCK_ITEM_SPECIAL_CHARS = {
  id: 3,
  titulo: "Notícia: 100% real & legítima! #Incrível",
  data: "09 Jan 2026",
  imagem: "https://example.com/special.jpg",
  resumo: "Conteúdo com acentuação, ç, ã, é, etc...",
};

describe("NoticiaCard Component - Renderização e Comportamento", () => {
  // 1. Teste de Renderização Básica - verifica se o componente é criado
  it("1. deve criar a instância do componente com dados válidos", () => {
    const renderer = TestRenderer.create(<NoticiaCard item={MOCK_ITEM} />);
    expect(renderer).toBeDefined();
    expect(renderer).not.toBeNull();
  });

  // 2. Teste de Renderização com dados válidos
  it("2. deve aceitar prop item com campos obrigatórios", () => {
    const renderer = TestRenderer.create(<NoticiaCard item={MOCK_ITEM} />);
    expect(() => {
      renderer.toJSON();
    }).not.toThrow();
  });

  // 3. Testes com item nulo
  it('3. deve retornar null se a prop "item" for nula', () => {
    const renderer = TestRenderer.create(<NoticiaCard item={null} />);
    const tree = renderer.toJSON();
    expect(tree).toBeNull();
  });

  // 4. Teste de Props Validation
  it("4. deve ter PropTypes definido para o item", () => {
    expect(NoticiaCard.propTypes).toBeDefined();
    expect(NoticiaCard.propTypes.item).toBeDefined();
  });

  // 5. Teste com dados alternativos
  it("5. deve renderizar com dados alternativos", () => {
    const renderer = TestRenderer.create(
      <NoticiaCard item={MOCK_ITEM_ALTERNATIVE} />
    );
    expect(() => {
      renderer.toJSON();
    }).not.toThrow();
  });

  // 6. Teste com caracteres especiais
  it("6. deve renderizar com caracteres especiais", () => {
    const renderer = TestRenderer.create(
      <NoticiaCard item={MOCK_ITEM_SPECIAL_CHARS} />
    );
    expect(() => {
      renderer.toJSON();
    }).not.toThrow();
  });

  // 7. Teste múltiplas instâncias
  it("7. deve criar múltiplas instâncias sem erros", () => {
    const renderer1 = TestRenderer.create(<NoticiaCard item={MOCK_ITEM} />);
    const renderer2 = TestRenderer.create(
      <NoticiaCard item={MOCK_ITEM_ALTERNATIVE} />
    );
    const renderer3 = TestRenderer.create(
      <NoticiaCard item={MOCK_ITEM_SPECIAL_CHARS} />
    );

    expect(renderer1).toBeTruthy();
    expect(renderer2).toBeTruthy();
    expect(renderer3).toBeTruthy();
  });

  // 8. Teste de estrutura com dados completos
  it("8. deve não lançar erro ao acessar toJSON() com dados válidos", () => {
    const renderer = TestRenderer.create(<NoticiaCard item={MOCK_ITEM} />);
    expect(() => {
      const tree = renderer.toJSON();
      return tree;
    }).not.toThrow();
  });

  // 9. Teste com variações de dados
  it("9. deve renderizar com diferentes variações de dados sem erros", () => {
    const items = [MOCK_ITEM, MOCK_ITEM_ALTERNATIVE, MOCK_ITEM_SPECIAL_CHARS];
    items.forEach((item) => {
      const renderer = TestRenderer.create(<NoticiaCard item={item} />);
      expect(() => {
        renderer.toJSON();
      }).not.toThrow();
    });
  });

  // 10. Teste de robustez com diferentes valores falsy
  it("10. deve testar múltiplos valores falsy", () => {
    const falsyValues = [null, undefined, false, 0, ""];
    falsyValues.forEach((falsyValue) => {
      const renderer = TestRenderer.create(<NoticiaCard item={falsyValue} />);
      const tree = renderer.toJSON();
      expect(tree).toBeNull();
    });
  });

  // 11. Teste de prop type
  it("11. deve ter propTypes como objeto com item definido", () => {
    const propTypes = NoticiaCard.propTypes;
    expect(typeof propTypes).toBe("object");
    expect(propTypes.item).toBeTruthy();
  });

  // 12. Teste de exportação
  it("12. deve exportar o componente como default", () => {
    expect(NoticiaCard).toBeTruthy();
    expect(typeof NoticiaCard).toBe("function");
  });

  // 13. Teste de comportamento com item indefinido
  it('deve retornar null se a prop "item" for nula ou undefined', () => {
    // Teste com null
    const { toJSON: toJSONNull } = render(<NoticiaCard item={null} />);
    expect(toJSONNull()).toBeNull();

    // Teste com undefined (Isso força a cobertura da linha de proteção)
    const { toJSON: toJSONUndefined } = render(
      <NoticiaCard item={undefined} />
    );
    expect(toJSONUndefined()).toBeNull();
  });
});
