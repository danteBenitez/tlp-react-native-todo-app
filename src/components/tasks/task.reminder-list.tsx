import { useTasks } from "@/hooks/use-tasks";
import { fromToday } from "@/utils/date";
import { FlatList, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import TaskReminder from "./task.reminder";

export default function TaskReminderList() {
  const { tasks } = useTasks();
  const byRecent = [...tasks].sort(
    (a, b) => fromToday(b.date) - fromToday(a.date)
  );
  return (
    <View>
      <TaskReminder size={"big"} task={byRecent[0]} />
      <View style={{}}>
        <Text
          variant="headlineMedium"
          style={{
            fontWeight: "medium",
            marginTop: 20,
            paddingHorizontal: 20,
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
              justifyContent: "center",
              alignItems: "stretch",
            }}
            data={byRecent.slice(1)}
            directionalLockEnabled
            renderItem={({ item }) => (
              <TaskReminder
                heroStyle={{ height: 235, paddingBottom: 20 }}
                footerStyle={{ marginTop: "auto" }}
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
