import { AuthProvider } from "@/components/auth/provider";
import { PreferenceProvider } from "@/components/preferences/provider";
import RootStack from "@/components/root";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { composeWithDevTools } from "@redux-devtools/extension";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import taskReducer from "./slices/tasks/task.reducer";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const reducer = combineReducers({
  taskList: taskReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <AuthProvider>
        <PreferenceProvider>
          <RootStack />
        </PreferenceProvider>
      </AuthProvider>
    </Provider>
  );
}
