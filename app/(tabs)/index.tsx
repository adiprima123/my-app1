import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../store/reducer/kursusSlice";
import CourseCard from "../../components/CourseCard";

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const kursusList = useSelector((state: any) => state.kursus.data);
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false); // 🔄 loading state

  const onGetData = async (query = "") => {
    try {
      setIsLoading(true); // mulai loading
      const response = await axios.get(`https://adiprima-api-id2.vercel.app/api/kursus?filter=${query}`);
      dispatch(setData(response.data.data));
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setIsLoading(false); // selesai loading
    }
  };

  useEffect(() => {
    onGetData(); // ambil data awal
  }, []);

  const handleSearch = () => {
    onGetData(filter);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Input + tombol cari */}
      <View style={styles.searchRow}>
        <TextInput
          style={styles.input}
          placeholder="Cari kursus..."
          value={filter}
          onChangeText={setFilter}
        />
        <TouchableOpacity
          style={[styles.button, isLoading && styles.buttonDisabled]}
          onPress={handleSearch}
          disabled={isLoading} // jangan bisa ditekan saat loading
        >
          <Text style={styles.buttonText}>
            {isLoading ? "Mencari..." : "Cari"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Loading Indicator */}
      {isLoading && (
        <ActivityIndicator size="large" color="#6C63FF" style={styles.loading} />
      )}

      {/* List Kursus */}
      <FlatList
        style={styles.container}
        data={kursusList}
        onRefresh={() => onGetData(filter)}
        refreshing={false}
        renderItem={({ item }) => (
          <CourseCard
            imageUrl={item.img_url}
            category={item.kategori}
            date={item.tgl}
            title={item.title}
            description={item.deskripsi}
            onDetailPress={() => router.push(`/detail?id=${item._id}`)}
            onStartPress={() => router.push("/course")}
          />
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FAFAFA",
  },
  searchRow: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  button: {
    marginLeft: 10,
    backgroundColor: "#6C63FF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  loading: {
    marginVertical: 10,
  },
});

export default Home;
