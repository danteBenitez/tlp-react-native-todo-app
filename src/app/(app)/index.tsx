import { baseStyles } from "@/components/base-styles";
import TaskReminder from "@/components/tasks/task.reminder";
import TaskReminderList from "@/components/tasks/task.reminder-list";
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
          height: "97%",
          width: "100%",
          marginTop: 15,
          backgroundColor: theme.colors.surface,
          paddingTop: 20,
          paddingVertical: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <View>
          <Text variant="titleLarge" style={[baseStyles.baseText, baseStyles.heading]}>
            ¡Bienvenido
          </Text>
          <Text variant="headlineLarge" style={[baseStyles.baseText, baseStyles.heading]}>
            {user?.username ?? "Desconocido"}!
          </Text>
          <Text variant="bodyLarge" style={[baseStyles.baseText, baseStyles.subheading]}>
            ¿Qué tienes para hacer hoy?
          </Text>
        </View>
        <View>
          <TaskReminderList />
        </View>
      </View>
    </View>
  );
}

const style = ScaledSheet.create({
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
  },
});
