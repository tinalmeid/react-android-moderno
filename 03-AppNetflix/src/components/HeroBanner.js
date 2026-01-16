/**
 * @file HeroBanner.js
 * @description Componente que exibe banners de destaque para filmes ou séries.
 *
 * @module components/HeroBanner
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

export default function HeroBanner({ movie }) {
  if (!movie) return null;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: movie.url }}
        style={styles.heroImage}
        accessibilityRole="image"
        accessibilityLabel={`Destaque: ${movie.title}`}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)", "#000"]}
          style={styles.gradient}
        >
          <Text style={styles.tags}>{movie.genre}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Feather name="plus" size={24} color="#FFF" />
              <Text style={styles.textButton}>Minha Lista</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.playButton}>
              <Ionicons name="play" size={24} color="#000" />
              <Text style={styles.playText}>Assistir</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton}>
              <Feather name="info" size={24} color="#FFF" />
              <Text style={styles.textButton}>Saiba Mais</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

// CORREÇÃO: Apenas UMA definição de PropTypes e usando o nome correto (Singular)
HeroBanner.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired, // Alterado para string para bater com o MockData
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
  tags: { color: "#fff", fontSize: 13, marginBottom: 15, fontWeight: "500" },
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
  playText: { color: "#000", fontWeight: "bold", fontSize: 16 },
  iconButton: { alignItems: "center" },
  textButton: { color: "#FFF", fontSize: 10, marginTop: 4 },
});
