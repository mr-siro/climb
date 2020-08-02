import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, ActivityIndicator, Image} from 'react-native';
import {MyHeader} from '@components';
import {ItemsModel, InstructorModel, CategoriesModel} from './Constant';
import {Colors, Metrics} from '@shared';
import {Card} from 'react-native-elements';
import {Images} from '@assets';
import axios from 'axios';

export const MessageScreen = React.memo(() => {
  const [loading, setLoading] = useState(false),
    [error, setError] = useState(null),
    [refreshing, setRefreshing] = useState(false),
    [sideData, setSideData] = useState([]),
    [count,setCount] = useState(0),
    [skip, setSkip] = useState(0);
  const take = 5;

  useEffect(() => {
    if (skip === 0) {
      getData(true);
    }
  }, [skip]);

  const getData = (isRefresh?: boolean) => {
    const url = `https://apibeta.evp.debugger.vn/api/learner/v1/public/courses?skip=${skip}&take=${take}&query=&categoryId=`;
    axios({
      method: 'get',
      url: url,
    })
      .then((res) => {
        setSkip(skip + take);
        setCount(res.data.count)
        setSideData(
          isRefresh ? res.data.items : sideData.concat(res.data.items),
        );
      })
      .catch((error) => setError(error));
  };

  const handleLoadMore = (count:number) => {
    setLoading(true);
    if (skip < count) {
      getData();
    }
  };

  const renderFooter = () => {
    return skip <= count && loading ? (
      <View>
        <ActivityIndicator animating size={'large'} />
      </View>
    ) : null;
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

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <MyHeader title={'Course'} />
      <View style={{flex: 1, paddingVertical: 14}}>
        <FlatList
          data={sideData}
          ListFooterComponent={() => renderFooter()}
          onRefresh={() => setSkip(0)}
          refreshing={refreshing}
          onEndReached={() => handleLoadMore(count)}
          onEndReachedThreshold={0.5}
          renderItem={({item, index}) => renderItem(item, index)}
        />
      </View>
    </View>
  );
});
