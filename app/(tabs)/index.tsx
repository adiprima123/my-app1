import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";
import { useEffect } from "react";

const Home = () => {
  // Navigation functions for buttons
  const onGoToDetail = (index:any) => {
    if(index === 0) router.push('/detail');
  }; 
  
  const onGoToCourse = (index:any) => {
    if(index === 0) router.push('/course');
  }; 


  const cardData = [
    {
      imageUrl: 'https://www.reactnativedevelopmentcompany.com/wp-content/uploads/2020/12/How-many-types-of-navigation-in-react-nativ.png',
      category: 'React',
      date: 'Maret 2025',
      title: 'Navigasi di React Native',
      description: 'Saat teks ditampilkan, fungsi onLayout akan dipanggil secara otomatis.',
    },
    {
      imageUrl: 'https://www.visual-craft.com/strapi/uploads/React_Native_2_c5ab49be9b.png',
      category: 'Teknologi',
      date: 'April 2025',
      title: 'Desain Navigasi Lanjutan di React Native',
      description: 'Pendalaman tentang bagaimana membangun navigasi multi-layer dan interaktif dalam aplikasi mobile menggunakan React Native.',
    },
    {
      imageUrl: 'https://www.instamobile.io/wp-content/uploads/2019/04/Screen-Shot-2019-04-03-at-1.35.19-PM.png',
      category: 'Desain UI',
      date: 'Mei 2025',
      title: 'Membuat Antarmuka Modern di React Native',
      description: 'Eksplorasi desain futuristik menggunakan komponen dan animasi modern di React Native.',
    },
    {
      imageUrl: 'https://alvacommerce.com/wp-content/uploads/2024/04/20-04_React-VS-Laravel.png',
      category: 'Jaringan',
      date: 'Juni 2025',
      title: 'Menghubungkan Aplikasi React Native dengan Backend',
      description: 'Pembahasan tentang cara kerja koneksi jaringan, REST API, dan integrasi data pada aplikasi React Native.',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {cardData.map((item, index) => (
        <View key={index} style={styles.cardContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item.imageUrl }}  // Use the image URL from the array
              style={styles.image}
            />
          </View>

          <View style={styles.cardInfo}>
            <Text style={styles.option}>{item.category}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.buttonContainer}>
              {/* Preview Button */}
              <TouchableOpacity style={styles.previewButton} onPress={()=> onGoToDetail(index)}>
                <Text style={styles.buttonText}>Detail</Text>
              </TouchableOpacity>

              {/* Start Button */}
              <TouchableOpacity style={styles.startButton} onPress={() => onGoToCourse(index)}>
                <Text style={styles.buttonText}>Mulai</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}

      {/*  */}
      
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f8f8f8',
  },
  cardContainer: {
    height: 355,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    padding: 13,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 150,  // Fixed height for the image
    resizeMode: 'cover',
    borderRadius: 10,
  },
  cardInfo: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
  },
  option: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
    marginTop: -20,
    textAlign: 'right',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  description: {
    fontSize: 12,
    color: '#555',
    marginBottom: 12,
    lineHeight: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 10,
  },
  previewButton: {
    backgroundColor: '#8e44ad',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    shadowColor: '#8e44ad',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  startButton: {
    backgroundColor: '#0984e3',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    shadowColor: '#3498db',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
    marginRight: 150,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
