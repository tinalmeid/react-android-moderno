/**
 * Serviço responsável por fornecer os dados das notícias.
 * Segue o princípio de responsabilidade única (SRP) da arquitetura SOLID.
 *
 * @author Tina de Almeida
 * @date 2026-11-01
 * Task: ENG-646 Layouts Básicos e App 2 (Portal de Notícias)
 */

/**
 * Definição do array dos dados das notícias.
 * @typedef {Object} Noticia
 * @property {number} id - Identificador único da notícia.
 * @property {string} titulo - Título principal da notícia.
 * @property {string} data - Data da publicação da notícia.
 * @property {string} imagem - URL da imagem associada à notícia.
 * @property {string} resumo - Breve descrição  do conteúdo da notícia.
 */

/**
 * Lista simulada de notícias (mock data).
 * Utilizada para alimentar a FlatList no AppNoticias na ausência de uma API real.
 * @type {Noticia[]}
 */

export const NOTICIAS = [
  {
    id: 1,
    titulo: "Futebol: Cruzeiro vence clássico com golaço, no Mineirão",
    data: "11 Jan 2026",
    imagem:
      "https://sportbuzz.com.br/wp-content/uploads/2025/09/cruzeiro-vence-atletico-mg-com-show-de-kaio-jorge-e-vai-as-semis.jpg?w=500",
    resumo: "A Raposa dominou o clássico do início ao fim...",
  },
  {
    id: 2,
    titulo: "Tecnologia: React Native lança nova arquitetura",
    data: "10 Jan 2026",
    imagem:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500",
    resumo: "A nova versão promete 3x mais performance...",
  },
  {
    id: 3,
    titulo: "Dica Culinária: Como fazer Tender na Air Fryer",
    data: "23 Dez 2025",
    imagem:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500",
    resumo: "Receita rápida para quem não tem tempo a perder...",
  },
  {
    id: 4,
    titulo: 'Cinema: Estreia de "A Jornada Infinita" quebra recordes',
    data: "15 Dez 2025",
    imagem:
      "https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=500",
    resumo: "O filme conquistou o público com efeitos visuais...",
  },
  {
    id: 5,
    titulo: "Viagem: Destinos imperdíveis para 2026",
    data: "05 Jan 2026",
    imagem:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500",
    resumo: "Explore os melhores lugares para visitar no próximo ano...",
  },
  {
    id: 6,
    titulo: "Saúde: Corrida de rua sem pace é mais prazerosa, diz estudo",
    data: "08 Jan 2026",
    imagem:
      "https://midia-wp-kinsta-grupomarista.s3.sa-east-1.amazonaws.com/grupo-marista-2022/wp-content/uploads/2023/06/07185402/corrida.jpg?w=500",
    resumo:
      "Pesquisa revela que correr sem monitorar o ritmo melhora a experiência...",
  },
];
