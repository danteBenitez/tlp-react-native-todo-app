import { ComponentProps } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import Input from './input';

type InputControllerProps<TField extends FieldValues> = {
    name: Path<TField>;
    control: Control<TField>
   inputProps: ComponentProps<typeof Input>
   controllerProps?: Omit<ComponentProps<typeof Controller<TField>>, "render" | "name" | "control">
};


export default function InputController<TField extends FieldValues>(props: InputControllerProps<TField>) {
  return (
    <Controller
      {...props.controllerProps ?? {}}
      name={props.name}
      control={props.control as Control<TField>}
      render={({ field: { onChange }, fieldState: { error } }) => {
        return (
          <Input
            mode="outlined"
            onChangeText={value => onChange(value)}
            {...props.inputProps}
            error={error?.message as string}
          />
        );
      }}
    />
  );
}
