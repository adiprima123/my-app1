import { Stack } from "expo-router";
import { Header } from "react-native/Libraries/NewAppScreen";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name="about" options={{title: 'About Us'}}></Stack.Screen>
      <Stack.Screen name="detail" options={{title: 'Detail Course' }}></Stack.Screen>
      <Stack.Screen name="(tabs)" options={{headerShown: false }}></Stack.Screen>
      <Stack.Screen name="course" options={{headerShown: false }}></Stack.Screen>
    </Stack>
  );
}