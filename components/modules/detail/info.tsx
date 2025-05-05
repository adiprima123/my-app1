    // Info.js
    import { View, Text, StyleSheet, ScrollView } from 'react-native';

    export const Info = () => {
        return (
            <ScrollView style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Tentang Kursus Ini</Text>
                <Text style={styles.infoText}>
                    Navigasi di React Native adalah keterampilan penting bagi pengembang mobile. Ini membantu menciptakan transisi yang mulus antar layar, meningkatkan pengalaman pengguna. Kursus ini akan membimbing Anda melalui dasar-dasar navigasi, mengajarkan cara mengimplementasikan stack, tab, dan drawer navigation.
                </Text>
    
                <View style={styles.infoCard}>
                    <Text style={styles.infoCardTitle}>Apa yang Akan Anda Pelajari:</Text>
                    <Text style={styles.infoCardText}>- Mengatur React Navigation dari awal</Text>
                    <Text style={styles.infoCardText}>- Menguasai Stack Navigation untuk alur sederhana</Text>
                    <Text style={styles.infoCardText}>- Navigasi dengan Tabs untuk alur UI yang lebih baik</Text>
                    <Text style={styles.infoCardText}>- Mengimplementasikan Drawer Navigation untuk mengatur konten</Text>
                    <Text style={styles.infoCardText}>- Praktik terbaik untuk navigasi yang lancar dan efisien</Text>
                </View>
    
                <View style={styles.infoCard}>
                    <Text style={styles.infoCardTitle}>Syarat Mengikuti Kursus:</Text>
                    <Text style={styles.infoCardText}>- Pengetahuan dasar JavaScript dan React Native</Text>
                    <Text style={styles.infoCardText}>- Terbiasa dengan komponen React dan pengelolaan state</Text>
                    <Text style={styles.infoCardText}>- Lingkungan pengembangan yang siap dengan Expo atau React Native CLI</Text>
                </View>
    
                <View style={styles.infoCard}>
                    <Text style={styles.infoCardTitle}>Mengapa Mengambil Kursus Ini?</Text>
                    <Text style={styles.infoCardText}>
                        Navigasi antar layar di React Native adalah aspek penting dalam membangun aplikasi mobile. Dengan kursus ini, Anda akan mendapatkan pengalaman langsung menggunakan pustaka navigasi paling populer dan menerapkan solusi modern untuk routing — keterampilan penting bagi setiap pengembang mobile.
                    </Text>
                </View>
            </ScrollView>
        );
    };

    const styles = StyleSheet.create({
        infoContainer: {
            padding: 20,
            backgroundColor: '#f5f5f5',
        },
        infoTitle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#333',
            marginBottom: 15,
            textAlign: 'center',
        },
        infoText: {
            fontSize: 16,
            color: '#555',
            lineHeight: 22,
            marginBottom: 20,
        },
        infoCard: {
            backgroundColor: '#fff',
            padding: 15,
            borderRadius: 10,
            marginBottom: 20,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 6,
            elevation: 4,
        },
        infoCardTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
            marginBottom: 10,
        },
        infoCardText: {
            fontSize: 16,
            color: '#555',
            marginBottom: 8,
        },
    });
