import { View, Text, StyleSheet, ScrollView } from 'react-native';


export const Materi = () => {
    return (
        <ScrollView style={styles.materiContainer}>
            <Text style={styles.materiTitle}>Materi Kursus</Text>

            <View style={styles.materiList}>
                {/* Daftar Materi dengan Waktu dan Judul */}
                <Text style={styles.materiItem}><Text style={styles.time}>01:23</Text> Pengenalan Navigasi di React Native</Text>
                <Text style={styles.materiItem}><Text style={styles.time}>03:45</Text> Menjelajahi Stack Navigation: Dasar-Dasarnya</Text>
                <Text style={styles.materiItem}><Text style={styles.time}>05:12</Text> Tab Navigation: Mengatur Konten Aplikasi Anda</Text>
                <Text style={styles.materiItem}><Text style={styles.time}>07:20</Text> Drawer Navigation: Membuat Navigasi Samping yang Tetap</Text>
                <Text style={styles.materiItem}><Text style={styles.time}>09:10</Text> Menangani Nested Navigator: Membangun Alur Kompleks</Text>
                <Text style={styles.materiItem}><Text style={styles.time}>11:35</Text> Teknik Navigasi Lanjutan: Animasi dan Transisi</Text>
                <Text style={styles.materiItem}><Text style={styles.time}>14:02</Text> Praktik Terbaik dalam Navigasi Mobile</Text>
                <Text style={styles.materiItem}><Text style={styles.time}>16:47</Text> Debugging Navigasi: Cara Menyelesaikan Masalah Navigasi</Text>
                <Text style={styles.materiItem}><Text style={styles.time}>20:15</Text> Proyek Akhir: Menerapkan Aplikasi Multi-Halaman</Text>
                <Text style={styles.materiItem}><Text style={styles.time}>22:10</Text> Penutup dan Langkah Selanjutnya dalam Belajar React Native</Text>
            </View>

            {/* Bagian Catatan */}
            <View style={styles.materiNote}>
                <Text style={styles.materiNoteText}>
                    Catatan: Pastikan mengikuti contoh kode dan selesaikan latihan agar mendapatkan pengalaman langsung.
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    materiContainer: {
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    materiTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    materiList: {
        paddingLeft: 10,
    },
    materiItem: {
        fontSize: 16,
        color: '#555',
        marginBottom: 12,
        lineHeight: 24,
    },
    time: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1e90ff', // Blue color for time
        marginRight: 8,
    },
    materiNote: {
        backgroundColor: '#e8f5e9',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 3,
    },
    materiNoteText: {
        fontSize: 16,
        color: '#2e7d32',
        textAlign: 'center',
    },
});
