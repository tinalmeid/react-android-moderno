/**
 * @file HomeScreen.js
 * @description Tela principal do App Frases Motivacionais
 * Responsável apenas pela view e gerenciamento de estado local.
 *
 * @module screens/HomeScreen
 * @author Tina Almeida
 * @date 2025-01-15
 * Task: ENG-648 App Frases Motivacionais
 */

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import { QUOTES } from "../data/quotes";
import { IMAGES } from "../data/images";
import { getRandomIndex } from "../core/mathUtils";

// Atualiza o estado com uma nova frase aleatória
export default function HomeScreen() {
  // Estado inicial: Começa com uma frase aleatória
  const [quote, setQuote] = useState(QUOTES[0]);
  const [currentImage, setCurrentImage] = useState(IMAGES[0]);

  // Nova frase e imagem ao clicar no botão
  const handleUpdateContent = () => {
    // Sorteia uma nova frase e imagem
    const quoteIndex = getRandomIndex(QUOTES.length);
    setQuote(QUOTES[quoteIndex]);

    const imageIndex = getRandomIndex(IMAGES.length);
    setCurrentImage(IMAGES[imageIndex]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Imagem Dinâmica (Vem da URL) */}
      <Image
        source={{ uri: currentImage }}
        style={styles.heroImage}
        accessibilityLabel="Imagem inspiradora de fundo"
        resizeMode="cover" // Garante que a imagem cubra o espaço sem distorcer
      />

      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>"{quote}"</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleUpdateContent}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Nova Inspiração</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // Removemos o padding geral para a imagem poder encostar nas bordas se quiser,
    // mas aqui mantemos centralizado.
  },
  heroImage: {
    width: 300, // Aumentei um pouco para dar destaque
    height: 200, // Formato retangular paisagem
    marginBottom: 30,
    borderRadius: 15,
  },
  quoteContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 30,
    width: "90%",
    alignItems: "center", // Centraliza o texto dentro do card
  },
  quoteText: {
    fontSize: 20,
    fontStyle: "italic",
    color: "#2f3640",
    textAlign: "center",
    lineHeight: 28,
  },
  button: {
    backgroundColor: "#4cd137",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
