import WithImageBackground from "@/components/with-image-background";
import { useAuth } from "@/hooks/use-auth";
import { View } from "react-native";
import { Icon, Text, useTheme } from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";

export default function WelcomeMessage() {
  const theme = useTheme();
  const { user } = useAuth();
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <View
        style={{
          height: "90%",
          width: "100%",
          marginTop: 30,
          backgroundColor: theme.colors.surface,
          paddingTop: 20,
          paddingVertical: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <View>
          <Text variant="titleLarge" style={[style.baseText, style.heading]}>
            ¡Bienvenido
          </Text>
          <Text variant="headlineLarge" style={[style.baseText, style.heading]}>
            {user?.username ?? "Desconocido"}!
          </Text>
          <Text variant="bodyLarge" style={[style.baseText, style.subheading]}>
            ¿Qué tienes para hacer hoy?
          </Text>
        </View>
        <View>
          <View style={[style.hero, {
            backgroundColor: theme.colors.primary,
          }]}>
            <View style={{
              padding: 5,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <Text variant="bodyLarge" style={[style.baseText, style.heroText, {
                color: theme.colors.onPrimary,
              }]}>
                Hola
              </Text>
              <View style={{
                padding: 20,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 20
              }}>
                <Text variant="bodyMedium" style={{
                  color: theme.colors.onPrimary,
                }}>{new Date().toDateString()}</Text>
                <Icon source="clock-outline" size={30} color={theme.colors.onPrimary} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = ScaledSheet.create({
  baseText: {
    height: "auto",
    paddingTop: 20,
    paddingHorizontal: 20,
    lineHeight: 20,
  },
  heading: {
    fontWeight: 800,
    fontSize: 30,
  },
  subheading: {
    fontWeight: 400,
    fontSize: 20,
  },
  hero: {
    height: 200,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "red",
  },
  heroText: {
    fontWeight: 800,
    fontSize: 30,
  }
});
