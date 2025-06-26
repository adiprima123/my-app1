import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

const topikData = [
  [
    "React Navigation adalah pustaka populer untuk navigasi di aplikasi React Native.",
    "Dengan React Navigation, kamu bisa menavigasi antar layar menggunakan stack, tab, drawer, dan lainnya.",
    "Navigasi berbasis stack sangat cocok untuk berpindah layar secara berurutan seperti halaman login ke beranda.",
    "React Navigation mudah diintegrasikan dan memiliki dokumentasi yang lengkap.",
    "Navigasi sangat penting untuk mengatur flow aplikasi multi-halaman.",
  ],
  [
    "Topik 2: Instalasi React Navigation dimulai dengan `npm install @react-navigation/native`.",
    "Untuk navigasi berbasis stack, install juga `@react-navigation/native-stack`.",
    "Kamu perlu menginstal dependensi tambahan seperti `react-native-screens` dan `react-native-safe-area-context`.",
    "Setelah instalasi, bungkus aplikasi dengan `NavigationContainer`.",
    "`NavigationContainer` berfungsi sebagai root dari semua navigasi.",
  ],
  [
    "Topik 3: Stack Navigator digunakan untuk membuat navigasi bertingkat seperti halaman detail.",
    "Import `createNativeStackNavigator` dari `@react-navigation/native-stack`.",
    "Definisikan stack navigator dan daftar layar (screen) yang akan digunakan.",
    "Gunakan `navigation.navigate('NamaLayar')` untuk berpindah halaman.",
    "Gunakan `navigation.goBack()` untuk kembali ke halaman sebelumnya.",
  ],
  [
    "Topik 4: Navigasi dengan Tab dan Drawer.",
    "Tab Navigator cocok untuk aplikasi dengan banyak fitur utama seperti Instagram.",
    "Drawer Navigator menampilkan menu samping yang bisa di-slide.",
    "Import navigator tab dan drawer dari `@react-navigation/bottom-tabs` dan `@react-navigation/drawer`.",
    "Kombinasikan beberapa navigator untuk aplikasi yang kompleks.",
  ],
  [
    "Topik 5: Mengirim data antar layar.",
    "Gunakan `navigation.navigate('LayarTujuan', { param1: 'data' })` untuk mengirim data.",
    "Di layar tujuan, ambil data dengan `route.params.param1`.",
    "Pastikan data yang dikirim sesuai dengan tipe yang diharapkan.",
    "React Navigation mendukung pengelolaan parameter dinamis dan deep linking.",
  ],
];

const Topik = ({
  onComplete,
  updateProgress,
}: {
  onComplete: () => void;
  updateProgress: (count: number) => void;
}) => {
  const [currentTopik, setCurrentTopik] = useState(0);
  const [currentParagraph, setCurrentParagraph] = useState(0);

  const handleNext = () => {
    // Jika masih ada paragraf dalam topik saat ini
    if (currentParagraph + 1 < topikData[currentTopik].length) {
      setCurrentParagraph(currentParagraph + 1);
    } 
    // Jika sudah selesai semua paragraf dalam topik saat ini
    else {
      // Update progress untuk topik yang sudah selesai
      updateProgress(currentTopik + 1);
      
      // Jika masih ada topik berikutnya
      if (currentTopik + 1 < topikData.length) {
        setCurrentTopik(currentTopik + 1);
        setCurrentParagraph(0);
      } 
      // Jika sudah selesai semua topik
      else {
        onComplete();
      }
    }
  };

  return (
    <LinearGradient
      colors={['#f8f9ff', '#e6f0ff']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          <LinearGradient
            colors={['#2575fc', '#6a11cb']}
            style={[styles.progressBar, { 
              width: `${((currentTopik + (currentParagraph + 1)/topikData[currentTopik].length)/topikData.length)*100}%` 
            }]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
          <Text style={styles.progressText}>
            Topik {currentTopik + 1}/{topikData.length} • 
            Paragraf {currentParagraph + 1}/{topikData[currentTopik].length}
          </Text>
        </View>

        {/* Content Card */}
        <View style={styles.card}>
          <View style={styles.header}>
            <LinearGradient
              colors={['#2575fc', '#6a11cb']}
              style={styles.topicBadge}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.topicNumber}>Topik {currentTopik + 1}</Text>
            </LinearGradient>
          </View>

          <View style={styles.content}>
            {topikData[currentTopik]
              .slice(0, currentParagraph + 1)
              .map((para, idx) => (
                <View key={idx} style={styles.paragraphBox}>
                  <View style={styles.bulletPoint}>
                    <MaterialIcons name="check-circle" size={16} color="#2575fc" />
                  </View>
                  <Text style={styles.explanationText}>{para}</Text>
                </View>
              ))}
          </View>

          <TouchableOpacity 
            style={styles.nextButton} 
            onPress={handleNext}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#2575fc', '#6a11cb']}
              style={styles.gradientButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.buttonText}>
                {currentParagraph + 1 < topikData[currentTopik].length
                  ? "Lanjut ke Paragraf Berikutnya"
                  : currentTopik + 1 < topikData.length
                  ? "Lanjut ke Topik " + (currentTopik + 2)
                  : "Selesai & Mulai Quiz"}
              </Text>
              <MaterialIcons 
                name={currentParagraph + 1 < topikData[currentTopik].length 
                  ? "arrow-forward" 
                  : currentTopik + 1 < topikData.length 
                  ? "navigate-next" 
                  : "quiz"} 
                size={20} 
                color="#fff" 
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  progressContainer: {
    height: 6,
    backgroundColor: '#e0e8ff',
    borderRadius: 3,
    marginBottom: 20,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 3,
  },
  progressText: {
    textAlign: 'center',
    color: '#2575fc',
    fontSize: 12,
    marginTop: 5,
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#2575fc',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  topicBadge: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: '#2575fc',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  topicNumber: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  content: {
    marginBottom: 20,
  },
  paragraphBox: {
    flexDirection: 'row',
    backgroundColor: '#f8f9ff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  bulletPoint: {
    marginRight: 10,
    marginTop: 2,
  },
  explanationText: {
    flex: 1,
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },
  nextButton: {
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#2575fc',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  gradientButton: {
    paddingVertical: 15,
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
});

export default Topik;