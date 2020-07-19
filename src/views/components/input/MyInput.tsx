import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';
import {Input, Icon, InputProps} from 'react-native-elements';
import {Colors, Metrics} from '@shared';

export interface InputAuthProps {
  iconName?: string;
  iconType?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  containerStyle?: ViewStyle;
  inputContainerStyle?: ViewStyle;
  disabled?: boolean;
  disabledInputStyle?: TextStyle;
  errorMessage?: string;
  errorStyle?: TextStyle;
  inputStyle?: TextStyle;
  label?: string;
  labelStyle?: TextStyle;
  leftIconContainerStyle?: ViewStyle;
  placeholder?: string;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad'
    | 'visible-password'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'name-phone-pad'
    | 'twitter'
    | 'web-search'
    | undefined;
  onSubmitEditing?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
  returnKeyType?:
    | 'default'
    | 'done'
    | 'go'
    | 'next'
    | 'search'
    | 'send'
    | 'none'
    | 'previous'
    | 'google'
    | 'join'
    | 'route'
    | 'yahoo'
    | 'emergency-call'
    | undefined;
  secureTextEntry?: boolean | undefined;
}

export const MyInput = (props: InputAuthProps) => {
  const ref = React.createRef<Input>();
  return (
    <Input
      ref={ref}
      leftIcon={<Icon name={props.iconName} size={16} type={props.iconType} />}
      inputContainerStyle={[{borderBottomWidth: 0}, props.inputContainerStyle]}
      containerStyle={[styles.input, props.containerStyle]}
      value={props.value}
      onChangeText={props.onChangeText}
      disabled={props.disabled}
      disabledInputStyle={props.disabledInputStyle}
      errorMessage={props.errorMessage}
      errorStyle={props.errorStyle}
      inputStyle={props.inputStyle}
      label={props.label}
      labelStyle={props.labelStyle}
      leftIconContainerStyle={[
        {marginHorizontal: 12},
        props.leftIconContainerStyle,
      ]}
      placeholder={props.placeholder}
      keyboardType={props.keyboardType}
      onSubmitEditing={props.onSubmitEditing}
      returnKeyType={props.returnKeyType}
      secureTextEntry={props.secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: 'white',
    elevation: 5,
    height: 45,
    width: 279,
    alignSelf: 'center',
  },
});
