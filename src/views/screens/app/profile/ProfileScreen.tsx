import React, {useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import {AppRoute} from '@navigator';
import ProgressCircle from 'react-native-progress-circle';
import {MyHeader} from '@components';
import {styles} from './ProfileStyle';
import {Images} from '@assets';
import {Colors, Metrics} from '@shared';
import {listIntro} from '@services';

import {IntroProps} from './IntroProps';

export const ProfileScreen = () => {
  const [list, setList] = useState(listIntro);
  const renderItem = (item: IntroProps, index: number) => {
    return (
      <View
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          backgroundColor: 'white',
          elevation: 6,
          marginBottom: 10,
          paddingHorizontal: Metrics.spacing.medium,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 0.5,
            borderBottomColor: Colors.Gray,
            paddingVertical: Metrics.spacing.medium,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon size={18} name={item.icon} type={'font-awesome'} />
            <Text
              style={{
                fontSize: Metrics.FontSize.large,
                fontWeight: 'bold',
                marginLeft: 12,
              }}>
              {item.title}
            </Text>
          </View>

          <TouchableOpacity>
            <Text
              style={{fontSize: Metrics.FontSize.large, color: Colors.Primary}}>
              + Add
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: Metrics.spacing.medium,
          }}>
          <Text style={styles.dots}>♦</Text>
          <View style={{flex: 1}}>
            {item.data.map((x, index) => (
              <View key={index} style={{flexDirection: 'row', flex:1, backgroundColor:'red'}}>
                <Text style={{flex:1}}>{x.titleData}</Text>
                <Text>{x.year}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <MyHeader
        title={'My Profile'}
        leftIcon={'menu'}
        rightIcon={'ios-notifications-outline'}
        rightIconType={'ionicon'}
      />

      <View style={styles.container}>
        <View style={styles.topContent}>
          <ProgressCircle
            percent={50}
            radius={50}
            borderWidth={4}
            color="#10C105"
            shadowColor=""
            bgColor="#fff">
            <Image
              source={Images.AvtDefault}
              style={{width: 80, height: 80, borderRadius: 150}}
            />
          </ProgressCircle>
          <View style={styles.introduce}>
            <Text style={styles.name}>Tristana</Text>
            <Text style={styles.completeIntro}>Complete proflile 50%</Text>
          </View>
        </View>
        <View style={styles.centerContent}>
          <FlatList
            data={list}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => renderItem(item, index)}
          />
        </View>
      </View>
    </View>
  );
};
