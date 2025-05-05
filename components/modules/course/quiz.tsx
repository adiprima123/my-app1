import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const questions = [
  {
    question: "Apa itu React Navigation?",
    options: [
      "Pustaka untuk styling",
      "Tool untuk testing",
      "Pustaka navigasi di React Native",
      "Plugin untuk database",
    ],
    answerIndex: 2,
  },
  {
    question: "Komponen apa yang membungkus seluruh navigasi?",
    options: ["Stack", "Navigator", "NavigationWrapper", "NavigationContainer"],
    answerIndex: 3,
  },
  {
    question: "Navigator yang cocok untuk berpindah halaman bertingkat adalah?",
    options: [
      "Tab Navigator",
      "Drawer Navigator",
      "Stack Navigator",
      "List Navigator",
    ],
    answerIndex: 2,
  },
  {
    question: "Perintah instalasi dasar React Navigation adalah?",
    options: [
      "npm install react-navigation-core",
      "npm install @react-navigation/native",
      "npm install react-router",
      "npx react-navigation init",
    ],
    answerIndex: 1,
  },
  {
    question: "Apa fungsi `navigation.navigate('ScreenName')`?",
    options: [
      "Menampilkan alert",
      "Menambah komponen",
      "Pindah ke layar lain",
      "Menyimpan data",
    ],
    answerIndex: 2,
  },
  {
    question: "Navigator yang menggunakan menu di bagian bawah adalah?",
    options: [
      "Drawer Navigator",
      "Stack Navigator",
      "Bottom Tab Navigator",
      "Header Navigator",
    ],
    answerIndex: 2,
  },
  {
    question: "Bagaimana cara mengirim data ke layar lain?",
    options: [
      "Menggunakan props langsung",
      "Menggunakan Redux",
      "Melalui param saat navigasi",
      "Mengedit state global",
    ],
    answerIndex: 2,
  },
  {
    question: "Untuk kembali ke layar sebelumnya, gunakan perintah?",
    options: [
      "navigation.previous()",
      "navigation.goBack()",
      "navigation.back()",
      "navigation.pop()",
    ],
    answerIndex: 1,
  },
  {
    question: "Navigator yang cocok untuk menu samping adalah?",
    options: [
      "Bottom Tabs",
      "Stack Navigator",
      "Drawer Navigator",
      "Card Navigator",
    ],
    answerIndex: 2,
  },
  {
    question: "Bagaimana mengambil data dari parameter navigasi?",
    options: [
      "props.data",
      "navigation.getParam",
      "route.params.nama",
      "state.params.nama",
    ],
    answerIndex: 2,
  },
];

const Quiz = ({
  onComplete,
  updateProgress,
}: {
  onComplete: (correctAnswers: number, totalAnswered: number) => void;
  updateProgress: (count: number) => void;
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionPress = (index: number) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      if (selectedOption === questions[currentQuestion].answerIndex) {
        setScore(score + 1);
      }

      updateProgress(currentQuestion + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  const handleSubmit = () => {
    onComplete(score, questions.length);
  };

  if (isFinished) {
    return (
      <View style={styles.resultContainer}>
        <Text style={styles.finishTitle}>🎉 Selesai!</Text>
        <Text style={styles.finishText}>Kamu telah menyelesaikan semua soal.</Text>
        <Text style={styles.scoreText}>Skor Kamu: {score} / {questions.length}</Text>
        <TouchableOpacity style={styles.backButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const question = questions[currentQuestion];

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {currentQuestion + 1}. {question.question}
      </Text>
      {question.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.optionButton,
            selectedOption === index && styles.selectedOption,
          ]}
          onPress={() => handleOptionPress(index)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNext}
        disabled={selectedOption === null}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 12,
    fontWeight: "bold",
  },
  optionButton: {
    backgroundColor: "#dfe6e9",
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedOption: {
    backgroundColor: "#74b9ff",
  },
  optionText: {
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: "#0984e3",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  resultContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  finishTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  finishText: {
    fontSize: 16,
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: "#0984e3",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Quiz;
