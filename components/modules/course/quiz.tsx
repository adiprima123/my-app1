import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

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
      
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setIsFinished(true);
      }
    }
  };

  const handleSubmit = () => {
    onComplete(score, questions.length);
  };

  if (isFinished) {
    return (
      <LinearGradient
        colors={['#f8f9ff', '#e6f0ff']}
        style={styles.container}
      >
        <View style={styles.resultCard}>
          <LinearGradient
            colors={['#2575fc', '#6a11cb']}
            style={styles.resultHeader}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.finishTitle}>🎉 Quiz Selesai!</Text>
          </LinearGradient>
  
          <View style={styles.resultContent}>
            <Text style={styles.finishText}>Kamu telah menyelesaikan semua soal dengan hasil:</Text>
  
            <LinearGradient
              colors={['#2575fc', '#6a11cb']}
              style={styles.scoreBadge}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.scoreText}>{score} / {questions.length}</Text>
            </LinearGradient>
  
            <Text style={styles.percentageText}>
              {Math.round((score / questions.length) * 100)}% Jawaban Benar
            </Text>
  
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <LinearGradient
                colors={['#2575fc', '#6a11cb']}
                style={styles.gradientButton}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.submitText}>Lihat Hasil</Text>
                <MaterialIcons name="arrow-forward" size={20} color="#fff" style={{ marginLeft: 6 }} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }  

  const question = questions[currentQuestion];
  const progressPercentage = ((currentQuestion)/questions.length)*100;

  return (
    <LinearGradient
      colors={['#f8f9ff', '#e6f0ff']}
      style={styles.container}
    >
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          Soal {currentQuestion + 1}/{questions.length}
        </Text>
        <View style={styles.progressBar}>
          <LinearGradient
            colors={['#2575fc', '#6a11cb']}
            style={[styles.progressFill, { width: `${progressPercentage}%` }]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        </View>
      </View>

      {/* Question Card */}
      <View style={styles.card}>
        <Text style={styles.question}>
          {question.question}
        </Text>
        
        {/* Options */}
        {question.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedOption === index && styles.selectedOption,
            ]}
            onPress={() => handleOptionPress(index)}
          >
            <View style={styles.optionIndicator}>
              {selectedOption === index ? (
                <MaterialIcons name="check-circle" size={20} color="#fff" />
              ) : (
                <Text style={styles.optionLetter}>
                  {String.fromCharCode(65 + index)}
                </Text>
              )}
            </View>
            <Text style={[
              styles.optionText,
              selectedOption === index && styles.selectedOptionText
            ]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Next Button */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNext}
          disabled={selectedOption === null}
        >
          <LinearGradient
            colors={['#2575fc', '#6a11cb']}
            style={styles.gradientButton}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.buttonText}>
              {currentQuestion + 1 === questions.length ? 'Selesai' : 'Lanjut'}
            </Text>
            <MaterialIcons 
              name={currentQuestion + 1 === questions.length ? "check" : "arrow-forward"} 
              size={20} 
              color="#fff" 
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  progressContainer: {
    marginBottom: 24,
    paddingHorizontal: 4,
  },
  progressText: {
    color: '#2575fc',
    fontWeight: '600',
    marginBottom: 8,
    fontSize: 14,
    textAlign: 'center',
  },
  progressBar: {
    width: '100%',
    height: 10,
    backgroundColor: '#e0e8ff',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 5,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#2575fc',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  question: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2d3436',
    marginBottom: 25,
    lineHeight: 24,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9ff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0e8ff',
  },
  selectedOption: {
    backgroundColor: '#2575fc',
    borderColor: '#2575fc',
  },
  optionIndicator: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(37, 117, 252, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  optionLetter: {
    color: '#2575fc',
    fontWeight: 'bold',
    fontSize: 14,
  },
  optionText: {
    flex: 1,
    fontSize: 15,
    color: '#2d3436',
  },
  selectedOptionText: {
    color: '#fff',
  },
  nextButton: {
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 20,
    shadowColor: '#2575fc',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  gradientButton: {
    paddingVertical: 16,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
  },
  resultCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#2575fc',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
    margin: 16,
  },

    resultHeader: {
    padding: 20,
    alignItems: 'center',
  },

    finishTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },

    resultContent: {
    padding: 24,
    alignItems: 'center',
  },

    finishText: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginBottom: 16,
  },
    coreBadge: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 50,
    marginBottom: 15,
  },
  scoreBadge: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 50,
    marginBottom: 10,
  },
  scoreText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  percentageText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2575fc',
    marginBottom: 20,
  },submitButton: {
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Quiz;