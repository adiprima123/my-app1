import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import Topik from "../components/modules/course/topik";
import Quiz from "../components/modules/course/quiz";
import { router } from "expo-router";
import { useProgressStore } from "../store/progressStore";

const Course = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const {
    setTopikProgress,
    setQuizProgress,
    setScore,
  } = useProgressStore();

  const handleTopikComplete = () => {
    setTopikProgress(5);
    setShowQuiz(true);
  };

  const handleQuizComplete = (finalScore: number, totalAnswered: number) => {
    setScore(finalScore);
    setQuizProgress(totalAnswered);
    router.push("/(tabs)/progres");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>📘 React Native Course</Text>

      <View style={styles.progressBarWrapper}>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: `${showQuiz ? 100 : 50}%` }]} />
        </View>
        <View style={styles.stepLabels}>
          <Text style={[styles.stepLabel, !showQuiz && styles.activeStepLabel]}>Topik</Text>
          <Text style={[styles.stepLabel, showQuiz && styles.activeStepLabel]}>Quiz</Text>
        </View>
      </View>

      {!showQuiz ? (
        <Topik
          onComplete={handleTopikComplete}
          updateProgress={(count) => setTopikProgress(count)}
        />
      ) : (
        <Quiz
          onComplete={handleQuizComplete}
          updateProgress={(count) => setQuizProgress(count)}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2d3436",
  },
  progressBarWrapper: {
    marginBottom: 20,
  },
  progressBarBackground: {
    backgroundColor: "#dfe6e9",
    height: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBarFill: {
    backgroundColor: "#0984e3",
    height: "100%",
  },
  stepLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  stepLabel: {
    fontSize: 14,
    color: "#b2bec3",
  },
  activeStepLabel: {
    color: "#2d3436",
    fontWeight: "bold",
  },
});

export default Course;
