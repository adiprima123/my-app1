import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useProgressStore } from "../../store/progressStore";
import { LinearGradient } from "expo-linear-gradient";

const Progres = () => {
  const { topikProgress, quizProgress, score } = useProgressStore();

  const topikMax = 5;
  const quizMax = 10;
  const progressPercentage = Math.round((score / quizMax) * 100);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        colors={['#2575fc', '#6a11cb']} // Blue gradient
        style={styles.card}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.cardTitle}>React Native Navigation</Text>
        
        <View style={styles.progressItem}>
          <Text style={styles.progressLabel}>Topik Dibaca</Text>
          <View style={styles.barContainer}>
            <LinearGradient
              colors={['#ffffff', '#c2d9ff']}
              style={[styles.barFill, { width: `${(topikProgress / topikMax) * 100}%` }]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
          </View>
          <Text style={styles.progressCount}>{topikProgress}/{topikMax}</Text>
        </View>
        
        <View style={styles.progressItem}>
          <Text style={styles.progressLabel}>Quiz Dijawab</Text>
          <View style={styles.barContainer}>
            <LinearGradient
              colors={['#ffffff', '#c2d9ff']}
              style={[styles.barFill, { width: `${(quizProgress / quizMax) * 100}%` }]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
          </View>
          <Text style={styles.progressCount}>{quizProgress}/{quizMax}</Text>
        </View>
        
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreLabel}>Nilai:</Text>
          <Text style={styles.scoreValue}>{score}/{quizMax}</Text>
          <View style={styles.percentageBadge}>
            <Text style={styles.percentageText}>
              {progressPercentage}%
            </Text>
          </View>
        </View>

        {progressPercentage >= 70 ? (
          <Text style={styles.motivationText}>🎉 Excellent! Pertahankan!</Text>
        ) : (
          <Text style={styles.motivationText}>💪 Terus belajar!</Text>
        )}
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9ff',
  },
  card: {
    borderRadius: 16,
    padding: 20,
    shadowColor: "#2575fc",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 25,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2
  },
  progressItem: {
    marginBottom: 20,
  },
  progressLabel: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1
  },
  barContainer: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressCount: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'right',
    marginTop: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    padding: 12,
    borderRadius: 8,
  },
  scoreLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1
  },
  scoreValue: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1
  },
  percentageBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 12,
  },
  percentageText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1
  },
  motivationText: {
    marginTop: 15,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'italic',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1
  },
});

export default Progres;