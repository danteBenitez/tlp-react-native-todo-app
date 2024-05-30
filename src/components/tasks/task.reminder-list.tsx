import { FlatList, ScrollView, View } from "react-native";
import TaskReminder from "./task.reminder";
import { Task } from "@/interfaces/task";
import { Text, useTheme } from "react-native-paper";

export default function TaskReminderList() {
  const tasks: Task[] = [
    {
      id: 1,
      title: "Comprar pan",
      description: "Panadería la flor de la vida",
      author: "Yo",
      date: new Date(),
    },
    {
      id: 2,
      title: "Llamar a mamá",
      description: "Recordarle que le quiero",
      author: "Yo",
      date: new Date(),
    },
    {
      id: 3,
      title: "Reunión con el jefe",
      description: "Presentar informe de ventas",
      author: "Yo",
      date: new Date(),
    },
  ];
  const theme = useTheme();
  return (
    <View>
      <TaskReminder
        size={"big"}
        task={tasks[0]}
      />
      <View style={{}}>
        <Text
          variant="headlineMedium"
          style={{
            fontWeight: "medium",
            marginTop: 20,
          }}
        >
          Tareas recientes
        </Text>
        <ScrollView
          horizontal={true}
          style={{
            flexDirection: "row",
          }}
        >
          <FlatList
            contentContainerStyle={{
              flexDirection: "row",
              alignItems: "center",
            }}
            data={tasks.slice(1)}
            renderItem={({ item }) => (
              <TaskReminder
                size={"small"}
                task={item}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </ScrollView>
      </View>
    </View>
  );
}
