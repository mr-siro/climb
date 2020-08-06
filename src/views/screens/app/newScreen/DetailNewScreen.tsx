import React from 'react';
import {View, Text, Image} from 'react-native';
import {MyHeader} from '@components';
import {DetailNewScreenProps} from '@navigator';
import {Images} from '@assets';
import {Metrics} from '@shared';

export const DetailNewScreen: React.FunctionComponent<DetailNewScreenProps> = (props) => {
  const {navigation, route} = props;
  const {id, title, imageUrl, short} = route.params;
  return (
    <View style={{flex: 1}}>
      <MyHeader
        title={'Detail'}
        leftIcon={'arrow-back'}
        leftIconType={'material'}
        onLeftPress={() => navigation.goBack()}
      />
      <View>
        <View style={{padding: Metrics.spacing.medium}}>
          <Text
            style={{
              fontSize: Metrics.FontSize.h5,
              paddingBottom: 24,
              fontWeight: 'bold',
            }}>
            {title}
          </Text>

          <Image
            style={{width: '100%', height: 300, borderRadius: 10}}
            resizeMode={'cover'}
            source={{uri: imageUrl}}
          />

          <Text style={{paddingTop: 24}}>{short}</Text>
        </View>
      </View>
    </View>
  );
};
