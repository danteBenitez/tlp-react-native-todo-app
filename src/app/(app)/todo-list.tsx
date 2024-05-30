import { baseStyles } from "@/components/base-styles";
import MarginLayout from "@/components/tasks/margin-layout";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function TodoList() {
  return (
    <MarginLayout>
      <Text
        variant="titleLarge"
        style={[baseStyles.baseText, baseStyles.heading]}
      >
        Tus tareas
      </Text>
    </MarginLayout>
  );
}
