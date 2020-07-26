import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import { Icon} from 'react-native-elements';

import {styles} from '../../ProfileStyle';
import {Colors, Metrics} from '@shared';
import { Title} from '@styles';
export interface WrappProps {

    icon?:string;
    title?:string;
    onPress?:() => void;
    children?: React.ReactNode;
}
export const WrapperList = (props:WrappProps) => {
    return (
        <View style={styles.wrapperList}>
        <View style={styles.wrapperTitleList}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon size={18} name={props.icon} type={'font-awesome'} />
            <Title>{props.title}</Title>
          </View>

          <TouchableOpacity
            onPress={props.onPress}>
            <Text
              style={{fontSize: Metrics.FontSize.large, color: Colors.Primary}}>
              + Add
            </Text>
          </TouchableOpacity>
        </View>
       {props.children}
      </View>
    )
}