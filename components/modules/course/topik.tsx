import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

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
    if (currentParagraph + 1 < topikData[currentTopik].length) {
      setCurrentParagraph(currentParagraph + 1);
    } else if (currentTopik + 1 < topikData.length) {
      const nextTopik = currentTopik + 1;
      setCurrentTopik(nextTopik);
      setCurrentParagraph(0);
      updateProgress(nextTopik + 1);
    } else {
      updateProgress(5);
      onComplete();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.subHeader}>📖 Topik {currentTopik + 1}</Text>

        {topikData[currentTopik]
          .slice(0, currentParagraph + 1)
          .map((para, idx) => (
            <View key={idx} style={styles.paragraphBox}>
              <Text style={styles.explanationText}>{para}</Text>
            </View>
          ))}

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentParagraph + 1 < topikData[currentTopik].length
              ? "Next"
              : currentTopik + 1 < topikData.length
              ? "Next Topik"
              : "Mulai Quiz"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
    backgroundColor: "#f5f6fa",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2d3436",
    marginBottom: 12,
    textAlign: "center",
  },
  paragraphBox: {
    backgroundColor: "#ecf0f1",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  explanationText: {
    fontSize: 14.5,
    color: "#2d3436",
    lineHeight: 22,
  },
  nextButton: {
    backgroundColor: "#00b894",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Topik;
