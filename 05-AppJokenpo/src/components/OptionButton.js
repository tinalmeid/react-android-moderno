/**
 * @file OptionButton.js
 * @description Componente de botão para as opções do jogo Jokenpo.
 * @module components/OptionButton
 *
 * @author Tina Almeida
 * @date 2025-01-18
 * Tasks: ENG-649 Componentização do App Jokenpo
 */

import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

/**
 * Componente de botão para uma opção do jogo Jokenpo.
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.choice - Objeto de escolha contendo id, name e icon.
 * @param {Function} props.onPress - Função a ser chamada quando o botão for pressionado.
 * @param {boolean} props.disabled - Indica se o botão está desabilitado.
 */

export default function OptionButton({ choice, onPress, disabled = false }) {
    return (
<TouchableOpacity
      style={[styles.container, disabled && styles.disabled]}
      onPress={() => onPress(choice)}
      disabled={disabled}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityLabel={`Escolher ${choice.label}`}
    >
      <Text style={styles.icon}>{choice.icon}</Text>
      <Text style={styles.label}>{choice.label}</Text>
    </TouchableOpacity>
  );
}

// --- CONTRATO DE DADOS ---
OptionButton.propTypes = {
  // Choice
  choice: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,

  // OnPress
  onPress: PropTypes.func.isRequired,

  // Disabled
  disabled: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  disabled: {
    opacity: 0.6,
    backgroundColor: '#e0e0e0',
  },
  icon: {
    fontSize: 40,
    marginBottom: 5,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    textTransform: 'uppercase',
  },
});