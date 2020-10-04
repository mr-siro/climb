import React, {useState,  useEffect} from 'react';
import {
  View,
  Text,
  Animated,
  Image,
  RefreshControl,
  FlatList,
} from 'react-native';
import {Header} from 'react-native-elements';
import {Colors, Metrics, Font} from '@themes';
import {Padding, Margin} from '@shared';
import {Discover} from '@models';
import {Images} from '@assets';
import axios from 'axios';

export const DiscoverScreen = React.memo(() => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [isEndOfList, setIsEndOfList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const take = 5;

  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 50);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 50],
    outputRange: [0, -50],
    extrapolate:'clamp'
  });

  const headerHeight = diffClamp.interpolate({
    inputRange:[0,50],
    outputRange:[50,0],
    extrapolate:'clamp'
  })
  const headerOpacity = diffClamp.interpolate({
    inputRange:[0,50],
    outputRange:[1,0],
    extrapolate:'clamp'
  })
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

  const renderItem = (item:Discover,index:number) => (
    <View>
      <Text>{item.title}</Text>
  <Text>{item.description}</Text>
    </View>
  );
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <Animated.View
        style={{
          transform: [{translateY: translateY}],
          elevation: 4,
          height:headerHeight,
          opacity:headerOpacity,
          zIndex:100
          
        }}>
        <Header
          containerStyle={{backgroundColor: Colors.White}}
          leftComponent={{
            text: 'Khám phá',
            style: {
              color: Colors.Primary,
              fontSize: Metrics.FontSize.h3,
              width: 200,
              fontFamily: Font.Bold,
            },
          }}
          rightComponent={{
            icon: 'search',
            color: Colors.TextPrimary,
            type: 'font-awesome',
          }}
        />
      </Animated.View>
      
      <FlatList
        data={data}
        renderItem={({item,index}) => renderItem(item,index)}
        onEndReached={() => onEndReached()}
        refreshControl={refreshView()}
        keyExtractor={(item:Discover) => item.id}
        onScroll={(e)=>{
          scrollY.setValue(e.nativeEvent.contentOffset.y) 
      }}
      scrollEventThrottle={5}
      bounces={false}
      />
      
    </View>
  );
});
