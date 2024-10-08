import { baseStyles } from "@/components/base-styles";
import TaskReminder from "@/components/tasks/task.reminder";
import { useTasks } from "@/hooks/use-tasks";
import { Task } from "@/interfaces/task";
import { isToday, isTomorrow } from "@/utils/date";
import { Fragment } from "react";
import { SectionList, View } from "react-native";
import { List, Text } from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";

export default function TodoList() {
  const { tasks } = useTasks();
  const forToday = tasks.filter((task) => isToday(task.date));
  const forTomorrow = tasks.filter((task) => isTomorrow(task.date));
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
        (t) =>
          forToday.indexOf(t) === -1 &&
          forTomorrow.indexOf(t) === -1 &&
          t.date.getTime() > new Date().getTime()
      ),
    },
  ];
  return (
    <View
      style={{
        paddingHorizontal: 5,
        paddingVertical: 0,
      }}
    >
      <SectionList
        sections={sections}
        contentContainerStyle={style.content}
        keyExtractor={(item) => item.id.toString()}
        renderSectionHeader={({ section }) => (
          <Fragment>
            <List.Subheader
              style={[
                baseStyles.heading,
                baseStyles.subheading,
                {
                  fontWeight: 800,
                  marginTop: 0,
                  fontSize: 20,
                },
              ]}
            >
              {section.title}
            </List.Subheader>

            {section.data.length == 0 && section.title == "Tareas para hoy" && (
              <TodoListEmpty title={"No hay tareas para hoy"} />
            )}
            {section.data.length == 0 &&
              section.title == "Tareas para mañana" && (
                <TodoListEmpty title={"No hay tareas para mañana"} />
              )}
          </Fragment>
        )}
        renderItem={({ item }) => (
          <TodoListItem task={item} key={item.id.toString()} />
        )}
      ></SectionList>
    </View>
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
    paddingBottom: "90@s",
  },
});
