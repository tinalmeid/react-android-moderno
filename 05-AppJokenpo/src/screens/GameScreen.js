/**
 * @file GameScreen.js
 * @description Tela principal do jogo Jokenpo (Pedra, Papel, Tesoura).
 * @module screens/GameScreen
 *
 * @author Tina Almeida
 * @date 2026-01-18
 * Tasks: ENG-649 Componentização do App Jokenpo
 */
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

// Importando dados e lógica do jogo
import { CHOICES } from "../data/choices.js";
import { getGameResult, getRandomChoice } from "../core/gameLogic.js";
import OptionButton from "../components/OptionButton.js";

export default function GameScreen() {
  const [userChoice, setUserChoice] = useState(null);
  const [cpuChoice, setCpuChoice] = useState(null);
  const [result, setResult] = useState(""); // "WIN", "LOSE", "DRAW"

  /**
   * Manipula a escolha do usuário e determina o resultado do jogo.
   * @param {Object} choice - A escolha feita pelo usuário.
   */
  const handlePlay = (choice) => {
    const cpu = getRandomChoice(CHOICES);
    const gameResult = getGameResult(choice.id, cpu.id);

    setUserChoice(choice);
    setCpuChoice(cpu);
    setResult(gameResult);
  };

  const handleReset = () => {
    setUserChoice(null);
    setCpuChoice(null);
    setResult(null);
  };

  // Helper para cor do resultado
  const getResultColor = () => {
    if (result === "WIN") return "#4cd137"; // Verde
    if (result === "LOSE") return "#e84118"; // Vermelho
    return "#fbc531"; // Amarelo (Empate)
  };

  // Retorna o texto amigável do resultado
  const getResultText = () => {
    if (result === "WIN") return "Você venceu!";
    if (result === "LOSE") return "Você perdeu!";
    return "Empate!";
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>JOKENPO</Text>

      <View style={styles.arena}>
        {/* Em vez de perguntar se NÃO tem resultado (!result),
            perguntamos se TEM resultado (result).
        */}

        {result ? (
          // 1: SE TEM RESULTADO (O que antes estava no else)
          <View style={styles.resultContainer}>
            <Text style={[styles.resultTitle, { color: getResultColor() }]}>
              {getResultText()}
            </Text>

            <View style={styles.matchup}>
              <View style={styles.fighter}>
                <Text style={styles.fighterLabel}>Você</Text>
                <Text style={styles.fighterIcon}>{userChoice?.icon}</Text>
              </View>
              <Text style={styles.vs}>VS</Text>
              <View style={styles.fighter}>
                <Text style={styles.fighterLabel}>CPU</Text>
                <Text style={styles.fighterIcon}>{cpuChoice?.icon}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
              <Text style={styles.resetText}>Jogar Novamente</Text>
            </TouchableOpacity>
          </View>
        ) : (
          // 2: SE NÃO TEM RESULTADO (Escolhendo a arma)
          <View style={styles.optionsContainer}>
            <Text style={styles.instruction}>Escolha sua arma:</Text>
            <View style={styles.row}>
              {CHOICES.map((item) => (
                <OptionButton
                  key={item.id}
                  choice={item}
                  onPress={handlePlay}
                />
              ))}
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
    alignItems: "center",
    paddingTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#2f3640",
    letterSpacing: 2,
    marginBottom: 40,
  },
  arena: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  optionsContainer: {
    alignItems: "center",
  },
  instruction: {
    fontSize: 18,
    color: "#718093",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  resultContainer: {
    alignItems: "center",
    width: "90%",
  },
  resultTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
  },
  matchup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 50,
  },
  fighter: {
    alignItems: "center",
  },
  fighterIcon: {
    fontSize: 60,
  },
  fighterLabel: {
    fontSize: 16,
    color: "#718093",
    marginBottom: 10,
    fontWeight: "bold",
  },
  vs: {
    fontSize: 24,
    fontWeight: "900",
    color: "#dcdde1",
  },
  resetButton: {
    backgroundColor: "#2f3640",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  resetText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
