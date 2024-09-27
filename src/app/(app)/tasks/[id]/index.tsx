import { baseStyles } from "@/components/base-styles";
import MarginLayout from "@/components/tasks/margin-layout";
import { useTasks } from "@/hooks/use-tasks";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { ReactNode, useReducer } from "react";
import { Platform, View } from "react-native";
import {
  Button,
  FAB,
  Icon,
  List,
  Modal,
  Text,
  Title,
  useTheme,
} from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";

export default function TaskDetails() {
  const { tasks, removeTask } = useTasks();
  const theme = useTheme();
  const { id } = useLocalSearchParams();
  const [shouldShowModal, toggle] = useReducer((state) => !state, false);

  if (!id || !tasks || Array.isArray(id)) {
    return <Redirect href="/tasks" />;
  }

  const taskId = parseInt(id);
  if (isNaN(taskId)) {
    return <Redirect href="/(app)/index" />;
  }
  const task = tasks.find((task) => task.id === taskId);
  if (!task) {
    return <Redirect href="/(app)/index" />;
  }

  return (
    <MarginLayout>
      <View
        style={{
          justifyContent: "center",
          paddingLeft: Platform.select({
            web: 20,
          }),
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
            },
          });
        }}
      />

      <FAB
        style={{
          width: 70,
          height: 70,
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          margin: 16,
          right: 10,
          bottom: 120,
        }}
        variant="secondary"
        icon="trash-can"
        onPress={() => toggle()}
      />
      <Modal
        visible={shouldShowModal}
        onDismiss={() => toggle()}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.background,
          borderRadius: 10,
          margin: 20,
          marginBottom: 50,
          padding: 10,
          gap: 20,
        }}
      >
        <Title>¿Estás seguro de que deseas eliminar la tarea?</Title>
        <View style={{ flexDirection: "row", paddingHorizontal: 20, gap: 20 }}>
          <Button
            onPress={() => {
              removeTask(task.id);
              toggle();
              router.navigate("/(app)");
            }}
            mode="contained"
          >
            Sí, borrar
          </Button>
          <Button onPress={() => toggle()} mode="contained-tonal">
            Cancelar
          </Button>
        </View>
      </Modal>
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
