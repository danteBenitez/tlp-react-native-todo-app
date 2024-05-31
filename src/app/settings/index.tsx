import { baseStyles } from "@/components/base-styles";
import MarginLayout from "@/components/tasks/margin-layout";
import { useAuth } from "@/hooks/use-auth";
import { List, Switch, Text, useTheme } from "react-native-paper";
import { ScrollView, View, useColorScheme } from "react-native";
import { usePreferences } from "@/hooks/use-preferences";

export default function Settings() {
  const { preferences, toggleDarkMode } = usePreferences();
  const { user, logout } = useAuth()!;
  const theme = useTheme();
  return (
    <MarginLayout>
      <View
        style={{
          padding: 10,
          flex: 1,
        }}
      >
        <Text
          variant="titleLarge"
          style={[baseStyles.baseText, baseStyles.heading]}
        >
          Configuración
        </Text>
        <Text
          variant="displayLarge"
          style={[
            baseStyles.baseText,
            baseStyles.subheading,
            {
              lineHeight: 30,
            },
          ]}
        >
          Configura tu cuenta y la aplicación a tu gusto.
        </Text>
        <ScrollView
          contentContainerStyle={{
            marginTop: 38,
            paddingHorizontal: 10,
            height: "95%",
            justifyContent: "flex-start",
          }}
        >
          <List.Section title="Tema">
            <List.Item
              title="Cambiar tema"
              left={(props) => (
                <List.Icon
                  {...props}
                  icon={preferences.theme == "light" ? "weather-sunny" : "moon-waning-crescent"}
                  color={theme.colors.primary}
                />
              )}
              right={() => {
                return (
                  <Switch
                    value={preferences.theme == "light"}
                    onValueChange={() => toggleDarkMode()}
                  />
                );
              }}
            />
          </List.Section>
          <List.Section title="Cuenta">
            <List.Item
              title={user?.username ?? "Desconocido"}
              left={(props) => (
                <List.Icon
                  {...props}
                  icon="account"
                  color={theme.colors.primary}
                />
              )}
            />
            <List.Item
              title="Cerrar sesión"
              left={(props) => (
                <List.Icon
                  {...props}
                  icon="logout"
                  color={theme.colors.primary}
                />
              )}
              onPress={() => {
                logout();
              }}
            />
          </List.Section>
        </ScrollView>
      </View>
    </MarginLayout>
  );
}
