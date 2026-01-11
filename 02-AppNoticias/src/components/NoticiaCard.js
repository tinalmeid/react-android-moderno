import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const NoticiaCard = ({ item }) => {
  if (!item) return null;
  return (
    <View
      style={styles.card}
      accessible
      accessibilityLabel={`Notícia: ${item.titulo}`}
    >
      <Image
        source={{ uri: item.imagem }}
        style={styles.imagem}
        accessibilityRole="image"
      />
      <View style={styles.conteudo}>
        <Text style={styles.data}>{item.data}</Text>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.resumo} numberOfLines={2}>
          {item.resumo}
        </Text>
      </View>
    </View>
  );
};

NoticiaCard.propTypes = {
  item: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    resumo: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  imagem: { width: "100%", height: 150 },
  conteudo: { padding: 16 },
  data: { fontSize: 12, color: "#666", marginBottom: 4 },
  titulo: { fontSize: 18, fontWeight: "bold", color: "#333", marginBottom: 8 },
  resumo: { fontSize: 14, color: "#555" },
});

export default NoticiaCard;
