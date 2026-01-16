/**
 * @file Header.js
 * @description Header/Navbar do App Netflix
 *
 * @module components/Header
 * @author Tina Almeida
 * @date 2025-01-15
 * Task: ENG-647 Layouts Básicos e App 3 (Clone Netflix)
 */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>NETFLIX</Text>
      <View style={styles.icons}>
        <MaterialIcons name="search" size={24} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#000",
    zIndex: 100,
  },
  logo: {
    color: "#e50914",
    fontSize: 24,
    fontWeight: "bold",
  },
  icons: {
    flexDirection: "row",
    gap: 16,
  },
});
