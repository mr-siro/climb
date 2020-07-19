import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {Colors, Metrics} from '@shared';

export interface CardProps {
  imageUrl?: string;
  title?: string;
  salary?: string;
  location?: string;
  onPress?: () => void;
  disable?: boolean;
}

export const Card = (props: CardProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: Metrics.spacing.medium,
        justifyContent: 'space-between',
        flex:1,
        alignItems:'center'
      }}>
      <View style={{paddingLeft: Metrics.spacing.medium, flexGrow:1}}>
        <Image source={{uri: props.imageUrl}} style={{width: 76, height: 76}} />
      </View>

      <View style={{flexGrow:3}}>
        <Text style={{fontWeight: 'bold', lineHeight:24}}>{props.title}</Text>
        <Text style={{color: Colors.Text.textAcient,lineHeight:24}}>
          Base Salary: {props.salary}
        </Text>
        <Text style={{color: Colors.Text.textAcient,lineHeight:24}}>
          Location: {props.location}
        </Text>
      </View>

      <View>
        <Button
          buttonStyle={{
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            width: 79,
            height: 45,
            backgroundColor:Colors.Primary
          }}
          disabled={props.disable}
          disabledTitleStyle={{color: Colors.Gray}}
          onPress={props.onPress}
          title={'Apply'}
        />
      </View>
    </View>
  );
};
