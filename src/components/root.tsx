import { Stack } from "expo-router";
import { useTheme } from "react-native-paper";

export default function RootStack() {
    const theme = useTheme();
  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(app)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
