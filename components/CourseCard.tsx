import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

interface CourseCardProps {
  imageUrl: string;
  category: string;
  date: string;
  title: string;
  description: string;
  onDetailPress: () => void;
  onStartPress: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  imageUrl,
  category,
  date,
  title,
  description,
  onDetailPress,
  onStartPress,
}) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {description}
        </Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.detailBtn} onPress={onDetailPress}>
            <Text style={styles.buttonText}>Detail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.startBtn} onPress={onStartPress}>
            <Text style={styles.buttonText}>Mulai</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 160,
    resizeMode: "cover",
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  category: {
    fontSize: 13,
    color: "#6C63FF",
    fontWeight: "600",
  },
  date: {
    fontSize: 12,
    color: "#999",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    marginBottom: 6,
  },
  description: {
    fontSize: 13,
    color: "#555",
    lineHeight: 18,
    marginBottom: 12,
  },
  actions: {
    flexDirection: "row",
    gap: 12,
  },
  detailBtn: {
    backgroundColor: "#6C63FF",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  startBtn: {
    backgroundColor: "#00B894",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 13,
    color: "#FFFFFF",
    fontWeight: "600",
  },
});

export default CourseCard;
