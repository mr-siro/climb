import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {MyHeader} from '@components';
import axios from 'axios';
import {Card} from 'react-native-elements';
import {Metrics} from '@shared';
import {Images} from '@assets';
import {AppRoute, AppNavigatorParams} from '@navigator';
import {StackNavigationProp} from '@react-navigation/stack';

export interface NewScreenProps {
  navigation: StackNavigationProp<AppNavigatorParams, AppRoute.NEWSCREEN>;
}
export const NewScreen = (props: NewScreenProps) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios({
      method: 'get',
      url: `https://fimex.stechcorp.com/api/homepagenewsitems`,
    })
      .then((res) => {
        setData(res.data.newsItems);
        console.log(res.data.newsItems);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderItem = (item: any, index: number) => {
    return (
      <View style={{padding: Metrics.spacing.medium}}>
        <Text
          style={{
            fontSize: Metrics.FontSize.h5,
            paddingBottom: 24,
            fontWeight: 'bold',
          }}>
          {item.title}
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(AppRoute.DETAILNEWDAIL, {
              id: item.id,
              title: item.title,
              imageUrl: item.pictureModel
                ? item.pictureModel.imageUrl
                : 'https://marinerescueqld.org.au/wp-content/uploads/2018/01/no-image.jpg',
              short: item.short,
            });
          }}>
          <Image
            style={{width: '100%', height: 300, borderRadius: 10}}
            resizeMode={'cover'}
            source={
              item.pictureModel
                ? {uri: item.pictureModel.imageUrl}
                : {
                    uri:
                      'https://marinerescueqld.org.au/wp-content/uploads/2018/01/no-image.jpg',
                  }
            }
          />
        </TouchableOpacity>

        <Text style={{paddingTop: 24}}>{item.short}</Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <MyHeader title={'New Screen'} />
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={({item, index}) => renderItem(item, index)}
        />
      </View>
    </View>
  );
};
