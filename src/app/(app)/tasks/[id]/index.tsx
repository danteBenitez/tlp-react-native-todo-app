import { baseStyles } from "@/components/base-styles";
import MarginLayout from "@/components/tasks/margin-layout";
import { useTasks } from "@/hooks/use-tasks";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { ReactNode } from "react";
import { View } from "react-native";
import { FAB, Icon, List, Text, useTheme } from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";

export default function TaskDetails() {
  const { tasks } = useTasks();
  const { id } = useLocalSearchParams();
  if (!id || !tasks || Array.isArray(id)) {
    return <Redirect href="/tasks" />;
  }

  const taskId = parseInt(id);
  if (isNaN(taskId)) {
    return <Redirect href="/tasks" />;
  }
  const task = tasks.find((task) => task.id === taskId);
  if (!task) {
    return <Redirect href="/tasks" />;
  }
  return (
    <MarginLayout>
      <View
        style={{
          justifyContent: "center",
          zIndex: 100,
        }}
      >
        <TextWithLabel label="Tarea">
          <Text
            variant="titleLarge"
            style={[
              baseStyles.baseText,
              baseStyles.heading,
              {
                lineHeight: 30,
                padding: 0,
                paddingTop: 0,
              },
            ]}
          >
            {task?.title}
          </Text>
        </TextWithLabel>
        <TextWithLabel label="Descripción">
          <Text
            variant="bodyLarge"
            style={[
              baseStyles.baseText,
              {
                lineHeight: 30,
                padding: 0,
                paddingTop: 0,
              },
            ]}
          >
            {task?.description}
          </Text>
        </TextWithLabel>
        <TextWithLabel label="Autor">
          <ListItem icon="account" title={task.author} />
        </TextWithLabel>
        <TextWithLabel label="Fecha">
          <ListItem icon="calendar" title={task.date.toDateString()} />
        </TextWithLabel>
      </View>

      <FAB
        style={{
          width: 70,
          height: 70,
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          margin: 16,
          right: 10,
          bottom: 30,
        }}
        icon="pencil"
        onPress={() => {
          router.navigate({
            pathname: `/tasks/[id]/edit`,
            params: {
              id: taskId,
            }
          });
        }}
      />
    </MarginLayout>
  );
}

function ListItem(props: { title: string; icon: string }) {
  const theme = useTheme();
  return (
    <List.Item
      title={props.title}
      style={[
        styles.listItem,
        {
          borderColor: theme.colors.elevation.level3,
          borderRadius: theme.roundness,
        },
      ]}
      left={() => {
        return (
          <Icon source={props.icon} size={24} color={theme.colors.primary} />
        );
      }}
    />
  );
}

export function TextWithLabel(props: { children: ReactNode; label: string }) {
  return (
    <View
      style={{
        justifyContent: "flex-end",
        borderRadius: 10,
      }}
    >
      <Text
        variant="labelMedium"
        style={[
          baseStyles.baseText,
          {
            textTransform: "uppercase",
            padding: 0,
          },
        ]}
      >
        {props.label}
      </Text>
      {props.children}
    </View>
  );
}

const styles = ScaledSheet.create({
  content: {
    padding: 20,
  },
  listItem: {
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 20,
    borderWidth: 1,
  },
});
