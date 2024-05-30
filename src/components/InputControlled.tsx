import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMainInput, MainInput} from './MainInput';
import {Controller, ControllerProps} from 'react-hook-form';

interface IInputController extends IMainInput, Partial<ControllerProps> {
  control?: any;
  disabledControl?: boolean;
}

export const InputControlled: React.FC<IInputController> = ({
  name,
  control,
  defaultValue,
  rules,
  disabled,
  disabledControl,
  ...inputProps
}) => {
  return (
    <Controller
      disabled={disabledControl}
      name={name as string} 
      control={control}
      defaultValue={defaultValue}
      rules={{
        required: true,
      }}
      render={({field: {onChange, onBlur, value}}) => (
        <MainInput
          type="email-address"
          placeholder="Email"
          onBlur={onBlur}
          setValue={onChange}
          value={value}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});
