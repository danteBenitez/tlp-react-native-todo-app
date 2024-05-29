import FormLayout from "@/components/form-layout";
import { Slot } from "expo-router";

export default function AuthLayout() {
  return (
    <FormLayout>
      <Slot />
    </FormLayout>
  );
}
