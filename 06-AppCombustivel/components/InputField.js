/**
 * @file InputField.js
 * @description Componente de campo de entrada de texto reutilizável.
 * @module components/InputField
 *
 * @author Tina Almeida
 * @date 2026-01-19
 * Tasks: ENG-650 Formulario e Inputs App de Combustível
 */
import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

/**
 * Componente de campo de entrada de texto.
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.label - Texto descritivo do campo.
 * @param {string} props.value - Valor atual do campo de entrada.
 * @param {Function} props.onChangeText - Função chamada quando o texto muda.
 */

export default function InputField({ label, value, onChangeText }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
        placeholder="0.00"
        placeholderTextColor="#999"
      />
    </View>
  );
}

// Validação de Contrato (SOLID: Interface Segregation)
InputField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: "100%",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: "#fff",
  },
});
