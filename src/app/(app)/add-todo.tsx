import { baseStyles } from "@/components/base-styles";
import InputController from "@/components/input-controller";
import MarginLayout from "@/components/tasks/margin-layout";
import { taskSchema } from "@/components/tasks/schema";
import { useAuth } from "@/hooks/use-auth";
import { useTasks } from "@/hooks/use-tasks";
import { Task } from "@/interfaces/task";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";
import { Button, List, Text, useTheme } from "react-native-paper";
import {
  DatePickerModal,
  es,
  registerTranslation,
} from "react-native-paper-dates";

registerTranslation("es", es);

export default function AddTodo() {
  const [visible, setVisible] = useState(false);
  const { user } = useAuth()!;
  const { control, handleSubmit, getValues, setValue, getFieldState } = useForm<Task>({
    defaultValues: {
      title: "",
      description: "",
      author: user?.username,
      date: new Date(),
    },
    resolver: zodResolver(taskSchema),
  });
  console.log(getValues("date"));
  const { addTask } = useTasks()!;
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
          Crea una nueva tarea
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
          Agrega una nueva tarea a tu lista para no olvidar nada.
        </Text>
        <ScrollView
          contentContainerStyle={{
            marginTop: 38,
            paddingHorizontal: 10,
            height: "95%",
            justifyContent: "flex-start",
          }}
        >
          <InputController
            name="title"
            control={control}
            inputProps={{
              mode: "outlined",
              label: "Título",
            }}
          />
          <InputController
            name="description"
            control={control}
            inputProps={{
              style: {
                height: 100,
              },
              multiline: true,
              mode: "outlined",
              label: "Descripción",
              textAlignVertical: "bottom",
              textAlign: "left",
            }}
          />
          <List.Item
            style={{
              backgroundColor: theme.colors.backdrop,
              borderRadius: theme.roundness,
              borderColor: theme.colors.outline,
              borderWidth: 1,
              padding: 10,
              marginBottom: 10,
            }}
            left={() => <List.Icon icon="account" />}
            title={"Autor"}
            description={user?.username}
          />
          <Button mode="outlined" contentStyle={{ justifyContent: "flex-start" }} icon="calendar" style={{
            marginTop: 30,
            paddingVertical: 10,
            borderRadius: 10 
          }} onPress={() => setVisible(true)}>
            {getFieldState("date").isDirty ? getValues("date")?.toLocaleDateString() : "Selecciona una fecha"}
          </Button>
          <DatePickerModal
            onDismiss={() => setVisible(false)}
            date={getValues("date") ?? new Date()}
            visible={visible}
            locale="es"
            label="Fecha de la tarea"
            onConfirm={({ date }) => {
              setValue("date", date ?? new Date(), {
                shouldDirty: true,
              });
              setVisible(false);
            }}
            mode={"single"}
          />
          <Button
            mode="outlined"
            style={{
              marginTop: "auto",
              marginBottom: 50,
              paddingHorizontal: 10,
              paddingVertical: 3,
              width: "100%",
            }}
            onPress={handleSubmit((fields) => {
              addTask(fields);
              router.replace("/(app)");
            })}
          >
            Crear tarea
          </Button>
        </ScrollView>
      </View>
    </MarginLayout>
  );
}
