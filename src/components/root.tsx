import { SplashScreen, Stack } from "expo-router";
import "react-native-reanimated";
import {
  ThemeProvider,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import {
  Button,
  PaperProvider,
  Text,
  adaptNavigationTheme,
} from "react-native-paper";
import { lightTheme, darkTheme } from "@/constants/theme";
import { AuthContext, AuthProvider } from "@/components/auth/provider";
import { usePreferences } from "@/hooks/use-preferences";
import { useEffect, useMemo, useState } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = {
  ...LightTheme,
  ...lightTheme,
  colors: {
    ...LightTheme.colors,
    ...lightTheme.colors,
  },
};
const CombinedDarkTheme = {
  ...DarkTheme,
  ...darkTheme,
  colors: {
    ...DarkTheme.colors,
    ...darkTheme.colors,
  },
};
export default function RootStack() {
  const { preferences } = usePreferences();
  const theme = useMemo<typeof CombinedDarkTheme>(() => preferences.theme == "light" ? CombinedDefaultTheme : CombinedDarkTheme, [preferences]);
  useEffect(() => {
    console.log("Preferences changed...");
  }, [preferences]);

  return (
    <PaperProvider theme={theme}>
      <ThemeProvider value={theme}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(app)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </PaperProvider>
  );
}
