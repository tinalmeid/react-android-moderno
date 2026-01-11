import React, { useState } from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import SorteioService from "./src/services/SorteioService";

export default function App() {
  const [numero, setNumero] = useState(0);

  const handleSorteio = () => {
    try {
      const novoNumero = SorteioService.sortearNumero(0, 10);
      setNumero(novoNumero);
    } catch (error) {
      console.error("Erro ao sortear:", error);
    }
  };

  return (
    // O Provider precisa envolver o App para calcular as margens do celular
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <View style={styles.content}>
          <Text style={styles.titulo}>Sorteador Numérico</Text>

          <View style={styles.resultadoContainer}>
            <Text style={styles.numeroDestaque}>{numero}</Text>
          </View>

          <View style={styles.botaoContainer}>
            <Button
              title="Sortear Número"
              onPress={handleSorteio}
              color="#2A9F85"
            />
          </View>

          <Text style={styles.rodape}>Tina Almeida • ENG-645</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "center", // Centraliza verticalmente
    alignItems: "center", // Centraliza horizontalmente
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 40,
  },
  resultadoContainer: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8F5E9",
    borderRadius: 75,
    marginBottom: 40,
    borderWidth: 2,
    borderColor: "#2A9F85",
  },
  numeroDestaque: {
    fontSize: 62,
    fontWeight: "bold",
    color: "#2A9F85",
  },
  botaoContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  rodape: {
    marginTop: 50,
    color: "#999",
    fontSize: 12,
  },
});
