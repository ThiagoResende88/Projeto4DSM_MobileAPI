import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import theme from '../constants/theme';

const CardDetail = ({ route }) => {
  const { card } = route.params; // Recebe a carta passada pela navegação

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: card.image }} style={styles.image} />
      <Text style={styles.title}>{card.name}</Text>
      <Text style={styles.type}>{card.type} • {card.race}</Text>
      <Text style={styles.description}>{card.desc}</Text>
      <Text style={styles.stats}>ATK: {card.atk} | DEF: {card.def} | Level: {card.level}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    padding: 16,
    flex: 1,

  },
  image: { width: "100%", height: 300, resizeMode: "contain" },
  title: { fontSize: 24, fontWeight: "bold", marginVertical: 8 },
  type: { fontSize: 16, color: "#666", marginBottom: 12 },
  description: { fontSize: 14, lineHeight: 20 },
  stats: { marginTop: 12, fontWeight: "bold" },
});

export default CardDetail;
