import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar"; // Usando a status bar correta do Expo

import { NOTICIAS } from "./src/data/noticias";
import NoticiaCard from "./src/components/NoticiaCard";

/**
 * Componente Principal (Root) da Aplicação de Notícias.
 * Responsável pela orquestração da lista e configuração da Área Segura.
 * @returns {JSX.Element} A árvore de componentes da tela principal.
 */
export default function App() {
  /**
   * Função de renderização para a FlatList.
   * @param {Object} props - Props injetadas pela FlatList.
   * @param {import('./src/data/noticias').Noticia} props.item - O dado da notícia.
   */
  const renderItem = ({ item }) => <NoticiaCard item={item} />;

  return (
    <SafeAreaProvider>
      {/* edges define quais bordas proteger (topo e laterais) */}
      <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Portal AppNews 📰</Text>
        </View>

        <FlatList
          testID="flatlist-noticias"
          data={NOTICIAS}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          initialNumToRender={4}
        />

        {/* StatusBar do Expo (style="auto" ajusta cor de acordo com o tema claro/escuro) */}
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  header: {
    backgroundColor: "#054A91",
    padding: 16,
    alignItems: "center",
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  listContent: {
    padding: 16,
    paddingBottom: 40,
  },
});
