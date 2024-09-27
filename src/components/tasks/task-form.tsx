import { useAuth } from "@/hooks/use-auth";
import { Task } from "@/interfaces/task";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";
import { Button, HelperText, Text } from "react-native-paper";
import {
  DatePickerModal,
  es,
  registerTranslation,
} from "react-native-paper-dates";
import { baseStyles } from "../base-styles";
import InputController from "../input-controller";
import MarginLayout from "./margin-layout";
import { taskSchema } from "./schema";

registerTranslation("es", es);

type TaskFormProps = {
  titleText: string;
  subtitleText: string;
  buttonText: string;
  onSubmit: (task: Task) => void;
  getValues: () => Task | undefined;
};

export default function TaskForm(props: TaskFormProps) {
  const [visible, setVisible] = useState(false);
  const { user } = useAuth()!;
  const form = useForm<Task>({
    defaultValues: {
      title: "",
      description: "",
      date: new Date(),
    },
    shouldUnregister: false,
    resolver: zodResolver(taskSchema),
  });

  const { control, watch, handleSubmit, setValue, getFieldState } = form;

  console.log(props.getValues());
  useEffect(() => {
    const task = props.getValues();
    if (task) {
      setValue("title", task.title, { shouldDirty: true });
      setValue("description", task.description, { shouldDirty: true });
      setValue("date", task.date, { shouldDirty: true });
    }
  }, [props.getValues]);

  const onPress = handleSubmit(() => {
    props.onSubmit({
      ...form.getValues(),
      author: user?.username ?? "Anónimo",
    });
    router.replace("/(app)");
  });

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
          style={[
            baseStyles.baseText,
            baseStyles.heading,
            {
              lineHeight: 30,
            },
          ]}
        >
          {props.titleText}
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
          {props.subtitleText}
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
            name={"title"}
            control={control}
            inputProps={{
              value: watch("title"),
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
              value: watch("description"),
              mode: "outlined",
              label: "Descripción",
              textAlignVertical: "bottom",
              textAlign: "left",
            }}
          />
          <Button
            mode="outlined"
            contentStyle={{ justifyContent: "flex-start" }}
            icon="calendar"
            style={{
              marginTop: 30,
              paddingVertical: 10,
              borderRadius: 10,
            }}
            onPress={() => setVisible(true)}
          >
            {getFieldState("date").isDirty
              ? watch("date")?.toLocaleDateString()
              : "Selecciona una fecha"}
          </Button>
          <DatePickerModal
            onDismiss={() => setVisible(false)}
            date={watch("date") ?? new Date()}
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
          <HelperText type="error" visible={!!getFieldState("date").error}>
            {getFieldState("date").error?.message}
          </HelperText>
          <Button
            mode="outlined"
            style={{
              marginTop: "auto",
              marginBottom: 50,
              paddingHorizontal: 10,
              paddingVertical: 3,
              width: "100%",
            }}
            onPress={() => {
              onPress();
            }}
          >
            {props.buttonText}
          </Button>
        </ScrollView>
      </View>
    </MarginLayout>
  );
}
