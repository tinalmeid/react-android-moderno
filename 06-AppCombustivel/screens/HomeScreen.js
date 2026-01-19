/**
 * @file HomeScreen.js
 * @description Tela inicial do aplicativo de controle de combustível.
 * @module screens/HomeScreen
 *
 * @author Tina Almeida
 * @date 2026-01-19
 * Tasks: ENG-650 Formulario e Inputs App de Combustível
 */
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';

import { StatusBar } from "expo-status-bar";

// Importando componentes e lógica
import InputField from "../components/InputField.js";
import { calculateBestFuel } from "../core/calculator.js";

// Imagem de combustível
const logoImage = require("../assets/logo.png");

export default function HomeScreen() {
    const[alcohol, setAlcohol] = useState("");
    const[gas, setGas] = useState("");
    const[result, setResult] = useState(null);

    const handleCalculate = () => {
        // Tratamento para trocar vírgula por ponto (UX brasileiro)
        const alcoholPrice = Number.parseFloat(alcohol.replace(',', '.'));
        const gasPrice = Number.parseFloat(gas.replace(',', '.'));

        const calculationResult = calculateBestFuel(alcoholPrice, gasPrice);

        setResult(calculationResult);
        Keyboard.dismiss();
    };

    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar style="dark" />

      <View style={styles.content}>
        {/* Usamos a variável importada direto no source */}
        <Image source={logoImage} style={styles.logo} resizeMode="contain" />

        <Text style={styles.title}>Álcool ou Gasolina?</Text>

        <View style={styles.form}>
          <InputField
            label="Preço do Álcool"
            value={alcohol}
            onChangeText={setAlcohol}
          />

          <InputField
            label="Preço da Gasolina"
            value={gas}
            onChangeText={setGas}
          />

          <TouchableOpacity style={styles.button} onPress={handleCalculate}>
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>
        </View>

        {result && (
          <View style={[styles.resultBox, result.type === 'ALCOHOL' ? styles.boxGreen : styles.boxRed]}>
            <Text style={styles.resultTitle}>{result.message}</Text>

            {result.type !== 'INVALID' && (
              <Text style={styles.resultSubtitle}>
                Relação: {Math.round(result.ratio * 100)}%
              </Text>
            )}
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150, // Aumentei um pouco para valorizar sua arte
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  form: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultBox: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  boxGreen: {
    backgroundColor: '#dff9fb',
    borderColor: '#6ab04c',
    borderWidth: 1,
  },
  boxRed: {
    backgroundColor: '#ffcccc',
    borderColor: '#eb4d4b',
    borderWidth: 1,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  resultSubtitle: {
    fontSize: 14,
    color: '#555',
    fontStyle: 'italic',
  },
});


