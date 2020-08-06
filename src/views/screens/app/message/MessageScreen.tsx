import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, ActivityIndicator, Image, RefreshControl} from 'react-native';
import {MyHeader} from '@components';
import {ItemsModel, InstructorModel, CategoriesModel} from './Constant';
import {Colors, Metrics} from '@shared';
import {Card} from 'react-native-elements';
import {Images} from '@assets';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

export const MessageScreen = React.memo(() => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [isEndOfList, setIsEndOfList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const take = 5;
  useEffect(() => {
    if (skip === 0) {
      getData(true);
    }
  }, [skip]);
  const getData = (isRefresh?: boolean) => {
    axios({
      method: 'get',
      url: `https://apibeta.evp.debugger.vn/api/learner/v1/public/courses?skip=${skip}&take=${take}&query=&categoryId=`,
    }).then(function (response) {
      setIsLoading(false);
      setSkip(skip + take);
      if (
        (isRefresh
          ? response.data.items.length
          : data.length + response.data.items.length) >= response.data.count
      ) {
        setIsEndOfList(true);
      } else {
        setIsEndOfList(false);
      }
      setData(
        isRefresh ? response.data.items : data.concat(response.data.items),
      );
    });
  };
  const onEndReached = () => {
    if (!isEndOfList) {
      getData();
    }
  };
  const onRefresh = () => {
    setSkip(0);
    setIsLoading(true);
  };

  const refreshView = () => {
    return <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />;
  };
  const renderItem = (item: ItemsModel, index: number) => (
    <View key={`${index}`}>
      <Card
        title={item.title}
        titleStyle={{
          textAlign: 'left',
          marginHorizontal: Metrics.FontSize.medium,
        }}
        image={
          item.featuredImageUrl !== null
            ? {uri: item.featuredImageUrl}
            : Images.NoImage
        }
        imageStyle={{height: 300, width: '100%', resizeMode: 'contain'}}>
        <Text>Price: {item.price}</Text>
      </Card>
    </View>
  );
  
  const times = useSelector((state: any) => state.user.counter);
  
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <MyHeader title={'Course'} />
      <View style={{flex: 1, paddingVertical: 14}}>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 20,
          justifyContent: 'center',
          alignSelf:'center',
          width: 100,
          height: 100,
        }}>
        <Text style={{fontSize: 24, textAlign:'center'}}>{times}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item,index}) => renderItem(item,index)}
        onEndReached={() => onEndReached()}
        refreshControl={refreshView()}
      />
      </View>
    </View>
  );
});
