/**
 * @file HeroBanners.js
 * @description Componente que exibe banners de destaque para filmes ou séries.
 *
 * @module components/HeroBanners
 * @author Tina Almeida
 * @date 2025-01-15
 * Task: ENG-647 Layouts Básicos e App 3 (Clone Netflix)
 */

import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

/**
 * Renderiza o banner principal
 * @param {Object} props - Propriedades do componente
 * @param {import('../data/mockData').Movie} props.movie - Objeto do filme a ser exibido no banner
 */
export default function HeroBanners({ movie }) {
  if (!movie) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: movie.url }} // Atualizado para usar 'url'
        style={styles.heroImage}
        accessibilityRole="image"
        accessibilityLabel={`Destaque: ${movie.title}`}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)", "#000"]}
          style={styles.gradient}
        >
          {/* Exibindo o Gênero como tags */}
          <Text style={styles.tags}>{movie.genre}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.iconButton}
              accessibilityLabel="Adicionar à minha lista"
            >
              <Feather name="plus" size={24} color="#FFF" />
              <Text style={styles.textButton}>Minha Lista</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.playButton}
              accessibilityRole="button"
              accessibilityLabel={`Assistir ${movie.title}`}
            >
              <Ionicons name="play" size={24} color="#000" />
              <Text style={styles.playText}>Assistir</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconButton}
              accessibilityLabel="Mais informações"
            >
              <Feather name="info" size={24} color="#FFF" />
              <Text style={styles.textButton}>Saiba Mais</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

// Atualização das PropTypes para refletir a estrutura correta do objeto movie
HeroBanners.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: { height: 450, width: "100%" },
  heroImage: { width: "100%", height: "100%" },
  gradient: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
    alignItems: "center",
  },
  tags: {
    color: "#fff",
    fontSize: 13,
    marginBottom: 15,
    fontWeight: "500",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "85%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  playButton: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 4,
    alignItems: "center",
    gap: 5,
  },
  playText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  iconButton: { alignItems: "center" },
  textButton: { color: "#FFF", fontSize: 10, marginTop: 4 },
});

HeroBanners.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }),
};
