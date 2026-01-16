/**
 * @file mockData.test.js
 * @description Testes dos dados mock
 */

import { MOVIES, FEATURED_MOVIE } from "../src/data/mockData";

describe("mockData - MOVIES Array", () => {
  it("deve ter filmes definidos", () => {
    expect(MOVIES).toBeDefined();
    expect(Array.isArray(MOVIES)).toBe(true);
    expect(MOVIES.length).toBeGreaterThan(0);
  });

  it("cada filme deve ter propriedades obrigatórias", () => {
    MOVIES.forEach((movie) => {
      expect(movie.id).toBeDefined();
      expect(movie.title).toBeDefined();
      expect(movie.url).toBeDefined();
      expect(movie.genre).toBeDefined();
    });
  });

  it("todos os filmes devem ter IDs únicos", () => {
    const ids = MOVIES.map((m) => m.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("todos os títulos devem ser strings não vazias", () => {
    MOVIES.forEach((movie) => {
      expect(typeof movie.title).toBe("string");
      expect(movie.title.length).toBeGreaterThan(0);
    });
  });

  it("todas as URLs devem ser strings válidas", () => {
    MOVIES.forEach((movie) => {
      expect(typeof movie.url).toBe("string");
      expect(movie.url.length).toBeGreaterThan(0);
    });
  });

  it("todos os gêneros devem ser strings", () => {
    MOVIES.forEach((movie) => {
      expect(typeof movie.genre).toBe("string");
      expect(movie.genre.length).toBeGreaterThan(0);
    });
  });
});

describe("mockData - FEATURED_MOVIE", () => {
  it("deve ter um filme em destaque", () => {
    expect(FEATURED_MOVIE).toBeDefined();
    expect(FEATURED_MOVIE.id).toBeDefined();
    expect(FEATURED_MOVIE.title).toBeDefined();
  });

  it("filme em destaque deve ter todas as propriedades obrigatórias", () => {
    expect(FEATURED_MOVIE).toHaveProperty("id");
    expect(FEATURED_MOVIE).toHaveProperty("title");
    expect(FEATURED_MOVIE).toHaveProperty("url");
    expect(FEATURED_MOVIE).toHaveProperty("genre");
  });

  it("filme em destaque deve ter título não vazio", () => {
    expect(typeof FEATURED_MOVIE.title).toBe("string");
    expect(FEATURED_MOVIE.title.length).toBeGreaterThan(0);
  });

  it("filme em destaque deve ter URL válida", () => {
    expect(typeof FEATURED_MOVIE.url).toBe("string");
    expect(FEATURED_MOVIE.url.length).toBeGreaterThan(0);
  });

  it("filme em destaque deve ter gênero válido", () => {
    expect(typeof FEATURED_MOVIE.genre).toBe("string");
    expect(FEATURED_MOVIE.genre.length).toBeGreaterThan(0);
  });
});

describe("mockData - Integração", () => {
  it("FEATURED_MOVIE pode estar no array MOVIES", () => {
    const isInMovies = MOVIES.some((m) => m.id === FEATURED_MOVIE.id);
    // Pode estar ou não, mas se estiver, deve ter os mesmos dados
    if (isInMovies) {
      const movieInArray = MOVIES.find((m) => m.id === FEATURED_MOVIE.id);
      expect(movieInArray.title).toBe(FEATURED_MOVIE.title);
    }
    expect(FEATURED_MOVIE).toBeDefined();
  });

  it("MOVIES e FEATURED_MOVIE devem ser consistentes", () => {
    expect(Array.isArray(MOVIES)).toBe(true);
    expect(typeof FEATURED_MOVIE).toBe("object");
    expect(FEATURED_MOVIE !== null).toBe(true);
  });

  it("cada elemento de MOVIES deve ser um objeto válido", () => {
    MOVIES.forEach((movie) => {
      expect(typeof movie).toBe("object");
      expect(movie !== null).toBe(true);
    });
  });
});
