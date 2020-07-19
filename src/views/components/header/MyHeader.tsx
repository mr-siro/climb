import React from 'react';
import {View, Text} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {Colors, Metrics} from '@shared';

export interface MyHeaderProps {
  leftIcon?: string;
  leftIconType?: string;
  rightIcon?: string;
  rightIconType?: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  title?: string;
}
export const MyHeader = (props: MyHeaderProps) => {
  return (
    <Header
      leftComponent={{
        icon: props.leftIcon,
        type: props.leftIconType,
        onPress: props.onLeftPress,
      }}
      centerComponent={{
        text: props.title,
        style: {fontWeight: 'bold', fontSize: 16},
      }}
      rightComponent={{
        icon: props.rightIcon,
        type: props.rightIconType,
        onPress: props.onRightPress,
      }}
      containerStyle={{backgroundColor: '#ffffff', borderBottomWidth: 0}}
    />
  );
};
