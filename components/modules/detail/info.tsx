import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Info = () => {
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Header Section with Blue Gradient */}
      <LinearGradient
        colors={['#2575fc', '#6a11cb']}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.headerTitle}>🚀 Navigasi React Native</Text>
        <Text style={styles.headerDesc}>
          Kuasai seni membangun navigasi yang modern, interaktif, dan efisien dengan React Native.
        </Text>
      </LinearGradient>

      {/* Learning Objectives Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardIcon}>🎯</Text>
          <Text style={styles.cardTitle}>Yang Akan Kamu Pelajari</Text>
        </View>
        
        <View style={styles.listContainer}>
          {[
            'Mengatur React Navigation dari awal',
            'Stack Navigation untuk alur sederhana',
            'Tab Navigation untuk UI interaktif',
            'Drawer Navigation untuk akses fleksibel',
            'Praktik terbaik navigasi modern',
          ].map((item, idx) => (
            <View key={idx} style={styles.listItem}>
              <View style={styles.listMarker}>
                <LinearGradient
                  colors={['#2575fc', '#6a11cb']}
                  style={styles.listDot}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                />
              </View>
              <Text style={styles.listText} numberOfLines={2}>
                {item}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Requirements Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardIcon}>🧠</Text>
          <Text style={styles.cardTitle}>Syarat Kursus</Text>
        </View>
        
        <View style={styles.listContainer}>
          {[
            'Pengetahuan dasar JavaScript & React Native',
            'Pemahaman tentang komponen dan state',
            'Lingkungan dev siap (Expo / React Native CLI)',
          ].map((item, idx) => (
            <View key={idx} style={styles.listItem}>
              <View style={styles.listMarker}>
                <LinearGradient
                  colors={['#2575fc', '#6a11cb']}
                  style={styles.listDot}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                />
              </View>
              <Text style={styles.listText} numberOfLines={2}>
                {item}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Importance Card with Blue Gradient */}
      <LinearGradient
        colors={['#2575fc', '#6a11cb']}
        style={styles.importanceCard}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.importanceIcon}>💡</Text>
        <Text style={styles.importanceTitle}>Kenapa Kursus Ini Penting?</Text>
        <Text style={styles.importanceText}>
          Navigasi adalah inti dari UX di aplikasi mobile. Dengan menguasai navigasi di React Native, kamu bisa membangun
          aplikasi profesional dengan alur yang rapi, modern, dan user-friendly.
        </Text>
      </LinearGradient>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9ff',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 30,
  },
  header: {
    padding: 25,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#2575fc',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  headerTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '800',
    marginBottom: 10,
    lineHeight: 30,
  },
  headerDesc: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 16,
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 20,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    width: '100%',
    maxWidth: windowWidth - 32,
    alignSelf: 'center',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardIcon: {
    fontSize: 22,
    marginRight: 10,
    color: '#2575fc',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2d3436',
  },
  listContainer: {
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  listMarker: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#e6f0ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 3,
  },
  listDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  listText: {
    flex: 1,
    fontSize: 15,
    color: '#4a4a4a',
    lineHeight: 22,
    flexWrap: 'wrap',
    maxWidth: windowWidth - 80,
  },
  importanceCard: {
    borderRadius: 18,
    padding: 22,
    marginBottom: 20,
    shadowColor: '#2575fc',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  importanceIcon: {
    fontSize: 26,
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  importanceTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  importanceText: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
});

export default Info;