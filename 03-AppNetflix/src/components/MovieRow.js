/**
 * @file HeroBanners.js
 * @description Componente que exibe banners de destaque para filmes ou séries. (FlatList)
 *
 * @module components/HeroBanners
 * @author Tina Almeida
 * @date 2025-01-15
 * Task: ENG-647 Layouts Básicos e App 3 (Clone Netflix)
 */

import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import PropTypes from "prop-types";

/**
 * @param {Object} props - Propriedades do componente
 * @param {string} props.title - Título da linha de filmes
 * @param {import('../data/mockData').Movie[]} props.movies - Array de filmes para exibir na linha
 */
export default function MovieRow({ title, movies }) {
  const renderMovieItem = ({ item }) => (
    <Image
      source={{ uri: item.url }} // Atualizado para usar 'url'
      style={styles.cover}
      accessibilityLabel={`Capa do filme ${item.title}`} // Acessibilidade melhorada com o título real
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.rowTitle}>{title}</Text>
      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        initialNumToRender={4}
        windowSize={3}
      />
    </View>
  );
}

MovieRow.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
};

const styles = StyleSheet.create({
  container: { marginTop: 24 },
  rowTitle: {
    color: "#e5e5e5",
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 16,
    marginBottom: 12,
  },
  cover: {
    width: 120,
    height: 180,
    borderRadius: 6,
    marginHorizontal: 6,
    resizeMode: "cover",
  },
  listContent: { paddingHorizontal: 10 },
});
