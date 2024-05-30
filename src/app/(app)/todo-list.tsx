import { baseStyles } from "@/components/base-styles";
import MarginLayout from "@/components/tasks/margin-layout";
import TaskReminder from "@/components/tasks/task.reminder";
import { useTasks } from "@/hooks/use-tasks";
import { Task } from "@/interfaces/task";
import { useState } from "react";
import { ScrollView, SectionList, View } from "react-native";
import { FlatList } from "react-native";
import { List, Text, useTheme } from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";

export default function TodoList() {
  const { tasks } = useTasks();
  const forToday = tasks.filter(
    (task) => task.date.getTime() === new Date().getTime()
  );
  const forTomorrow = tasks.filter(
    (task) => task.date.getTime() === new Date().getTime() + 1
  );
  const sections = [
    {
      title: "Tareas para hoy",
      data: forToday,
    },
    {
      title: "Tareas para mañana",
      data: forTomorrow,
    },
    {
      title: "Tareas para el futuro",
      data: tasks.filter(
        (t) => forToday.indexOf(t) === -1 && forTomorrow.indexOf(t) === -1
      ),
    },
  ];
  return (
    <MarginLayout>
      <Text
        variant="titleLarge"
        style={[baseStyles.baseText, baseStyles.heading]}
      >
        Tus tareas
      </Text>
      <View
        style={{
          paddingHorizontal: 5,
          marginBottom: 100,
        }}
      >
        <List.Section>
          <SectionList
            sections={sections}
            renderSectionHeader={({ section }) => (
              <>
                <List.Subheader
                  style={[
                    baseStyles.heading,
                    baseStyles.subheading,
                    {
                      fontWeight: 800,
                      marginTop: 20,
                    },
                  ]}
                >
                  {section.title}
                </List.Subheader>

                {section.data.length == 0 &&
                  section.title == "Tareas para hoy" && (
                    <TodoListEmpty title={"No hay tareas para hoy"} />
                  )}
                {section.data.length == 0 &&
                  section.title == "Tareas para mañana" && (
                    <TodoListEmpty title={"No hay tareas para mañana"} />
                  )}
              </>
            )}
            renderItem={({ item }) => <TodoListItem task={item} />}
          ></SectionList>
        </List.Section>
      </View>
    </MarginLayout>
  );
}

function TodoListItem(props: { task: Task }) {
  const { task } = props;
  return (
    <View>
      <TaskReminder task={task} size="small" />
    </View>
  );
}

function TodoListEmpty(props: { title: string }) {
  return (
    <Text
      style={[
        baseStyles.baseText,
        {
          padding: 10,
          textAlign: "center",
          color: "gray",
        },
      ]}
    >
      {props.title}
    </Text>
  );
}

const style = ScaledSheet.create({
  content: {
    padding: "10@s",
  },
});
