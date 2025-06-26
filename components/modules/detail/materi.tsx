import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const screenWidth = Dimensions.get('window').width;

export const Materi = () => {
  const materiList = [
    { time: '01:23', title: 'Pengenalan Navigasi di React Native', completed: true },
    { time: '03:45', title: 'Menjelajahi Stack Navigation: Dasar-Dasarnya', completed: true },
    { time: '05:12', title: 'Tab Navigation: Mengatur Konten Aplikasi Anda', completed: false },
    { time: '07:20', title: 'Drawer Navigation: Navigasi Samping yang Tetap', completed: false },
    { time: '09:10', title: 'Menangani Nested Navigator: Alur Kompleks', completed: false },
    { time: '11:35', title: 'Teknik Navigasi Lanjutan: Animasi dan Transisi', completed: false },
    { time: '14:02', title: 'Praktik Terbaik dalam Navigasi Mobile', completed: false },
    { time: '16:47', title: 'Debugging Navigasi: Menyelesaikan Masalah', completed: false },
    { time: '20:15', title: 'Proyek Akhir: Aplikasi Multi-Halaman', completed: false },
    { time: '22:10', title: 'Penutup & Langkah Selanjutnya', completed: false },
  ];

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Header with Gradient */}
      <LinearGradient
        colors={['#2575fc', '#6a11cb']}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.title}>📚 Materi Kursus</Text>
        <Text style={styles.subtitle}>React Native Navigation Mastery</Text>
      </LinearGradient>

      {/* Materials Card */}
      <View style={styles.card}>
        {materiList.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={[
              styles.materiItem,
              item.completed && styles.completedItem
            ]}
            activeOpacity={0.7}
          >
            <View style={styles.timeContainer}>
              <Text style={styles.time}>{item.time}</Text>
              {item.completed && (
                <View style={styles.completedBadge}>
                  <Text style={styles.completedText}>✓</Text>
                </View>
              )}
            </View>
            <Text 
              style={[
                styles.materiText,
                item.completed && styles.completedTextStyle
              ]}
              numberOfLines={2}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Note Box with Gradient */}
      <LinearGradient
        colors={['#2575fc', '#6a11cb']}
        style={styles.noteBox}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.noteIcon}>💡</Text>
        <Text style={styles.noteText}>
          Catatan: Ikuti contoh kode & latihan agar pembelajaran lebih maksimal.
        </Text>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9ff',
  },
  contentContainer: {
    paddingBottom: 40,
  },
  header: {
    padding: 28,
    borderRadius: 20,
    margin: 20,
    marginBottom: 25,
    shadowColor: '#2575fc',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 4,
  },
  materiItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  completedItem: {
    opacity: 0.8,
  },
  timeContainer: {
    width: 70,
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontWeight: '600',
    color: '#2575fc',
    fontSize: 15,
  },
  completedBadge: {
    backgroundColor: '#4CAF50',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  completedText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  materiText: {
    flex: 1,
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
    marginLeft: 10,
  },
  completedTextStyle: {
    color: '#888',
    textDecorationLine: 'line-through',
  },
  noteBox: {
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#2575fc',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  noteIcon: {
    fontSize: 24,
    marginRight: 12,
    color: '#fff',
  },
  noteText: {
    flex: 1,
    color: '#fff',
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500',
  },
});

export default Materi;