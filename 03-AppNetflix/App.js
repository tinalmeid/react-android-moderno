/**
 * @file App.js
 * @description Ponto de entrada do App 03 (Clone Netflix).
 * Responsável por compor a tela Home utilizando os componentes atômicos.
 *
 * @module AppNetflix
 * @author Tina Almeida
 * @date 2025-01-15
 * Task: ENG-647 Layouts Básicos e App 3 (Clone Netflix)
 */

import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

// Componentes Visuais
import Header from "./src/components/Header";
import HeroBanner from "./src/components/HeroBanner";
import MovieRow from "./src/components/MovieRow";

// Mock de Dados
import { MOVIES, FEATURED_MOVIE } from "./src/data/mockData";

export default function App() {
  return (
    <View style={styles.container}>
      {/* StatusBar 'light' deixa os ícones (bateria, wifi) brancos sobre o fundo preto */}
      <StatusBar style="light" translucent />

      {/* Header Fixo (z-index alto) */}
      <Header />

      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        // Otimização de performance para scroll suave
        scrollEventThrottle={16}
      >
        {/* Banner Principal */}
        <HeroBanner movie={FEATURED_MOVIE} />

        {/* Seção de Listas (Carrosséis) */}
        <View style={styles.rowsContainer}>
          {/* ATENÇÃO: Usando a prop 'movies' conforme refatoração do MovieRow.js */}
          <MovieRow title="Em Alta" movies={MOVIES} />

          {/* Simulando categorias diferentes invertendo a lista */}
          <MovieRow
            title="Populares na Netflix"
            movies={[...MOVIES].reverse()}
          />

          <MovieRow title="Séries Bingeworthy" movies={MOVIES} />

          <MovieRow title="Ação e Aventura" movies={[...MOVIES].reverse()} />
        </View>

        {/* Espaçador para garantir que o último item não fique "colado" na borda inferior */}
        <View style={styles.spacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Identidade Visual Netflix (Dark)
  },
  rowsContainer: {
    marginTop: -20, // Design System: Sobrepõe levemente o degradê do HeroBanner
    zIndex: 10,
    paddingBottom: 20,
  },
  spacer: {
    height: 50,
  },
});
