/**
 * Mock data for Netflix-like application
 * @file mockData.js
 * @description This file contains mock data for movies and TV shows used in the Netflix-like application.
 * Simula a resposta da API com dados fictícios para testes e desenvolvimento, preenchendo os carrosséis de filmes e séries.
 *
 * @module data/mockData
 * @author Tina Almeida
 * @date 2025-01-15
 */

/**
 * @typedef {Object} Movie
 * @property {string} id - Unique identifier for the movie
 * @property {string} title - Title of the movie
 * @property {string} genre - Genre of the movie
 * @property {string} description - Short description of the movie
 * @property {string} url - URL to the movie poster image
 */

/**
 * Lista de filmes fictícios para a aplicação
 * @type {Movie[]}
 */
export const MOVIES = [
  {
    id: "1",
    title: "Um sonho de liberdade",
    genre: "Drama",
    description:
      "Dois homens presos formam um vínculo improvável, encontrando consolo e redenção através de atos de decência comum.",
    url: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  },
  {
    id: "2",
    title: "O Poderoso Chefão",
    genre: "Crime • Drama",
    description:
      "A saga da família Corleone, uma das mais poderosas famílias mafiosas da América, e seu patriarca, Vito Corleone.",
    url: "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
  },
  {
    id: "3",
    title: "Batman: O Cavaleiro das Trevas",
    genre: "Ação • Crime • Drama",
    description:
      "Batman enfrenta o Coringa, um criminoso anárquico que deseja mergulhar Gotham City no caos.",
    url: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: "4",
    title: "12 Homens e uma Sentença",
    genre: "Drama",
    description:
      "Um jurado tenta convencer os outros onze a reconsiderarem sua decisão de condenar um jovem acusado de assassinato.",
    url: "https://image.tmdb.org/t/p/original/ArsmG8bAC6DpiQteUfaGaELWYR7.jpg",
  },
  {
    id: "5",
    title: "Férias Frustradas",
    genre: "Comédia",
    description:
      "As desventuras hilariantes da família Griswold enquanto tentam aproveitar suas férias em um parque temático.",
    url: "https://image.tmdb.org/t/p/original/xc6PLLsJJ6t0565PCjhPOPy8V8X.jpg",
  },
];

/**
 * Filme em destaque na página inicial
 */
export const FEATURED_MOVIE = {
  id: 0,
  title: "The Last of Us",
  genre: "Sombrio • Aventura • Drama",
  description:
    "Em um mundo pós-apocalíptico devastado por uma infecção fúngica, Joel, um sobrevivente endurecido, é contratado para escoltar Ellie, uma adolescente imune ao vírus, através dos Estados Unidos. À medida que enfrentam perigos inimagináveis e formam um vínculo profundo, eles descobrem que a verdadeira ameaça pode não ser apenas os infectados, mas também a natureza humana.",
  url: "https://image.tmdb.org/t/p/original/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg'",
};
