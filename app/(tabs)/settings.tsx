import { ScrollView, TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

const MenuItem = ({ icon, label, last }) => (
  <TouchableOpacity style={[styles.menuItem, !last && styles.menuItemBorder]}>
    <View style={styles.menuLeft}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <Text style={styles.menuLabel}>{label}</Text>
    </View>
    <Feather name="chevron-right" size={20} color="#B0C4DE" />
  </TouchableOpacity> 
);

export default function SettingsTab() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');

  useFocusEffect(
    useCallback(() => {
      const loadProfile = async () => {
        const storedName = await AsyncStorage.getItem('user_name');
        const storedEmail = await AsyncStorage.getItem('user_email');
        const storedImage = await AsyncStorage.getItem('user_image');

        if (storedName) setName(storedName);
        if (storedEmail) setEmail(storedEmail);
        if (storedImage) setImage(storedImage);
      };

      loadProfile();
    }, [])
  );

  return (
    <SafeAreaProvider>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Profile Header with Gradient */}
        <LinearGradient
          colors={['#2575fc', '#6a11cb']}
          style={styles.headerGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <View style={styles.profileHeader}>
            <TouchableOpacity onPress={() => router.push('/EditProfile')}>
              <Image
                source={{ uri: image || 'https://randomuser.me/api/portraits/men/1.jpg' }}
                style={styles.profileImage}
              />
              <View style={styles.editIcon}>
                <Feather name="edit-3" size={16} color="#fff" />
              </View>
            </TouchableOpacity>
            
            <Text style={styles.name}>{name || 'Adiprima Raharja'}</Text>
            <Text style={styles.email}>{email || 'diprimzzkingz@gmail.com'}</Text>
            
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>24</Text>
                <Text style={styles.statLabel}>Kursus</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>89%</Text>
                <Text style={styles.statLabel}>Progress</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>12</Text>
                <Text style={styles.statLabel}>Sertifikat</Text>
              </View>
            </View>
          </View>
        </LinearGradient>

        {/* Menu Cards */}
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Akun Saya</Text>
          
          <View style={styles.menuCard}>
            <MenuItem 
              icon={<MaterialIcons name="favorite-border" size={22} color="#2575fc" />} 
              label="Konten Disukai" 
            />
            <MenuItem 
              icon={<Feather name="download" size={22} color="#2575fc" />} 
              label="Unduhan Saya" 
            />
            <MenuItem 
              icon={<Feather name="credit-card" size={22} color="#2575fc" />} 
              label="Langganan" 
              last
            />
          </View>
          
          <Text style={styles.sectionTitle}>Pengaturan</Text>
          
          <View style={styles.menuCard}>
            <MenuItem 
              icon={<Feather name="globe" size={22} color="#2575fc" />} 
              label="Bahasa" 
            />
            <MenuItem 
              icon={<Feather name="bell" size={22} color="#2575fc" />} 
              label="Notifikasi" 
            />
            <MenuItem 
              icon={<Feather name="shield" size={22} color="#2575fc" />} 
              label="Privasi & Keamanan" 
              last
            />
          </View>
          
          <Text style={styles.sectionTitle}>Lainnya</Text>
          
          <View style={styles.menuCard}>
            <MenuItem 
              icon={<Feather name="help-circle" size={22} color="#2575fc" />} 
              label="Bantuan" 
            />
            <MenuItem 
              icon={<Feather name="info" size={22} color="#2575fc" />} 
              label="Tentang Aplikasi" 
            />
            <MenuItem 
              icon={<Feather name="star" size={22} color="#2575fc" />} 
              label="Beri Rating" 
              last
            />
          </View>
        </View>

        {/* Logout Button */}
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={() => console.log('Logging out')}
        >
          <Feather name="log-out" size={20} color="#FF4757" />
          <Text style={styles.logoutText}>Keluar dari Akun</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9ff',
  },
  headerGradient: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingBottom: 30,
    shadowColor: '#2575fc',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  profileHeader: {
    alignItems: 'center',
    paddingTop: 50,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  editIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#2575fc',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 15,
    color: '#fff',
  },
  email: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 25,
    paddingHorizontal: 30,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  statLabel: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 5,
  },
  menuSection: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6a11cb',
    marginTop: 25,
    marginBottom: 12,
    marginLeft: 10,
  },
  menuCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 15,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f5',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(37, 117, 252, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  logoutText: {
    color: '#FF4757',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});