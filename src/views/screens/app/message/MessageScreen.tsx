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
    [data, setData] = useState({count: 0, items: []}),
    [page, setPage] = useState(1),
    [error, setError] = useState(null),
    [refreshing, setRefreshing] = useState(false),
    [totalCount, setTotalCount] = useState(0),
    [endOfList, setEndOfList] = useState(false),
    [sideData, setSideData] = useState(data.items),
    [skip, setSkip] = useState(0);
  const take = 5;

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const url = `https://apibeta.evp.debugger.vn/api/learner/v1/public/courses?skip=${skip}&take=${take}&query=&categoryId=`;
    axios({
      method: 'get',
      url: url,
    })
      .then((res) => {
        setSkip(skip + 5);
        setData(res.data);
        setSideData(sideData.concat(res.data.items));
        setLoading(true);
        console.log(res.data.count);
        if (skip === res.data.count) {
          setEndOfList(true);
        }
      })
      .catch((error) => setError(error));
  };

  const handleRefresh = () => {
    setSkip(0);
    setRefreshing(true);
    getData();
  };

  const handleLoadMore = () => {
    if (!endOfList) {
      setLoading(true);
      getData();
    }
    console.log('skip:', skip);
    console.log('take:', take);
  };

  const renderFooter = (count: number) => {
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
        imageStyle={{height: 300, width: '100%', resizeMode: 'contain'}}></Card>
    </View>
  );
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <MyHeader title={'Course'} />
      <View style={{flex: 1, paddingVertical: 14}}>
        <FlatList
          data={sideData}
          ListFooterComponent={() => renderFooter(data.count)}
          onRefresh={handleRefresh}
          refreshing={refreshing}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          renderItem={({item, index}) => renderItem(item, index)}
        />
      </View>
    </View>
  );
});
