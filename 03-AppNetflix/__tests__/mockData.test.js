/**
 * @file mockData.test.js
 * @description Testes dos dados mock
 */

import { MOVIES, FEATURED_MOVIE } from "../src/data/mockData";

describe("mockData", () => {
  it("deve ter filmes definidos", () => {
    expect(MOVIES).toBeDefined();
    expect(Array.isArray(MOVIES)).toBe(true);
    expect(MOVIES.length).toBeGreaterThan(0);
  });

  it("cada filme deve ter id, title e url", () => {
    MOVIES.forEach((movie) => {
      expect(movie.id).toBeDefined();
      expect(movie.title).toBeDefined();
      expect(movie.url).toBeDefined();
    });
  });

  it("deve ter um filme em destaque", () => {
    expect(FEATURED_MOVIE).toBeDefined();
    expect(FEATURED_MOVIE.id).toBeDefined();
    expect(FEATURED_MOVIE.title).toBeDefined();
  });

  it("filme em destaque deve estar no array MOVIES ou ser válido", () => {
    expect(FEATURED_MOVIE).toHaveProperty("id");
    expect(FEATURED_MOVIE).toHaveProperty("title");
    expect(FEATURED_MOVIE).toHaveProperty("url");
  });
});
