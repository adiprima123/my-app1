import { ScrollView, TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MenuItem = ({ icon, label }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.menuLeft}>
      {icon}
      <Text style={styles.menuLabel}>{label}</Text>
    </View>
    <Feather name="chevron-right" size={24} color="#B0C4DE" />
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
      <ScrollView style={styles.container}>
        <View style={styles.headerCard}>
          <Image
            source={{ uri: image || 'https://reactjs.org/logo-og.png' }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>{name || 'Adiprima Raharja'}</Text>
          <Text style={styles.email}>{email || 'diprimzzkingz@gmail.com'}</Text>
          <TouchableOpacity style={styles.editButton} onPress={() => router.push('/EditProfile')}>
            <Text style={styles.editText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuCard}>
          <MenuItem icon={<Feather name="heart" size={22} color="#4682B4" />} label="Suka" />
          <MenuItem icon={<Feather name="download" size={22} color="#4682B4" />} label="Unduhan" />
          <View style={styles.separator} />
          <MenuItem icon={<Feather name="globe" size={22} color="#4682B4" />} label="Bahasa" />
          <MenuItem icon={<Feather name="map-pin" size={22} color="#4682B4" />} label="Lokasi" />
          <MenuItem icon={<Feather name="monitor" size={22} color="#4682B4" />} label="Mode Dekstop" />
          <MenuItem icon={<Feather name="rss" size={22} color="#4682B4" />} label="Referensi" />
          <MenuItem icon={<Feather name="credit-card" size={22} color="#4682B4" />} label="Langganan" />
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={() => console.log('Logging out')}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9F2FB',
    flex: 1,
  },
  headerCard: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#4682B4',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#777',
  },
  editButton: {
    marginTop: 12,
    backgroundColor: '#4682B4',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
  },
  editText: {
    color: '#fff',
    fontWeight: '600',
  },
  menuCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuLabel: {
    fontSize: 16,
    marginLeft: 14,
    color: '#333',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 8,
    marginHorizontal: 20,
  },
  logoutButton: {
    backgroundColor: '#FF6347',
    marginHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 30,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: '700',
  },
});
