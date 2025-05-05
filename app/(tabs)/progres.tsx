import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useProgressStore } from "../../store/progressStore";

const Progres = () => {
  const { topikProgress, quizProgress, score } = useProgressStore();

  const topikMax = 5;
  const quizMax = 10;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>React Native Navigation</Text>
        <View style={styles.cardContent}>
          <Text style={styles.progresText}>📘 Topik Dibaca: {topikProgress} / {topikMax}</Text>
          <Text style={styles.progresText}>📝 Quiz Dijawab: {quizProgress} / {quizMax}</Text>
          <Text style={styles.scoreText}>🏆 Jawaban Benar: {score} / {quizMax}</Text>
        </View>
      </View>

      {/* Tambahkan card lainnya di sini jika diperlukan */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f1f2f6",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0984e3",
    marginBottom: 15,
    textAlign: "center",
  },
  cardContent: {
    borderTopWidth: 1,
    borderTopColor: "#dfe6e9",
    paddingTop: 15,
  },
  progresText: {
    fontSize: 16,
    color: "#636e72",
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00b894",
    marginTop: 10,
  },
});

export default Progres;
