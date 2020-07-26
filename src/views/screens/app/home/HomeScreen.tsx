import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Header, Icon, Input, Slider, Button} from 'react-native-elements';
import {styles} from './HomeStyles';
import {Colors, Metrics} from '@shared';
import {Card, MyHeader} from '@components';
import {Dots} from '@styles';

import axios from 'axios';

export interface JobsType {
  title: string;
  salary: string;
  location: string;
  image: string;
  isExpired: boolean;
}

export const HomeScreen = () => {
  const [jobValue, setJobValue] = useState(''),
    [locationValue, setLocationValue] = useState(''),
    [sliderValue, setSliderValue] = useState(0.4),
    [listJobs, setListJobs] = useState([]),
    [isLoading, setIsLoading] = useState(false),
    [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  //call api
  const getData = () => {
    setIsLoading(true);
    axios({
      method: 'get',
      url: 'https://5eec5c4b5e298b0016b69a76.mockapi.io/abcsoft/jobs',
    })
      .then((response) => {
        setListJobs(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  //handlerSearch
  const handlerSearch = () => {
    if (jobValue !== '') {
      let searchList = [...listJobs];
      const filteredData = searchList.filter(
        (item: JobsType) =>
          item.title.match(jobValue) &&
          item.isExpired == false &&
          jobValue !== '',
      );
      return filteredData;
    }
    return listJobs;
  };

  //loading
  const loadingView = () => {
    return (
      <View style={styles.loadingStyle}>
        <Text style={{color: Colors.Primary}}>Loading...</Text>
        <ActivityIndicator size="large" color={Colors.Primary} />
      </View>
    );
  };

  //render item flatlist
  const renderItem = (item: JobsType, index: number) => {
    return (
      <Card
        title={item.title}
        imageUrl={item.image}
        salary={item.salary}
        location={item.location}
        disable={item.isExpired}
        onPress={() => {}}
      />
    );
  };

  //rendertopcontent
  const renderTopContent = () => {
    return (
      <View style={styles.topContent}>
        {/*input*/}
        {/*start input*/}
        <View style={styles.inputContainer}>
          <Input
            leftIcon={
              <Icon
                name={'map-marker'}
                color={Colors.Gray}
                type={'font-awesome'}
              />
            }
            value={jobValue}
            onChangeText={(text) => setJobValue(text)}
          />
          <Input
            leftIcon={
              <Icon
                name={'crosshairs'}
                color={Colors.Gray}
                type={'font-awesome'}
              />
            }
            rightIcon={<Text style={{fontWeight: 'bold'}}>15m</Text>}
            value={locationValue}
            onChangeText={(text) => setLocationValue(text)}
          />
        </View>
        {/*end input*/}
        {/*Slider & recommend*/}
        {/*start slider*/}
        <View>
          <Slider
            thumbTintColor={Colors.Primary}
            minimumTrackTintColor={Colors.Primary}
            style={styles.sliderStyle}
            trackStyle={{height: 7, borderRadius: 10}}
            value={sliderValue}
            onValueChange={(value) => setSliderValue(value)}
          />
          <View style={styles.recommendRow}>
            <Dots>♦</Dots>
            <Text style={{color: Colors.Text.textAcient}}>
              We have 12 work recommend for you
            </Text>
          </View>
        </View>
        {/*end slider*/}
      </View>
    );
  };

  //rendercentercontent
  const renderCenterContent = () => {
    return (
      <View style={styles.centerContent}>
        {isLoading ? (
          loadingView()
        ) : (
          <FlatList
            data={handlerSearch()}
            renderItem={({item, index}) => renderItem(item, index)}
          />
        )}
      </View>
    );
  };

  return (
    
      <View style={{backgroundColor: '#ffffff', flex: 1}}>
        {/*Header*/}
        <MyHeader
          title={'Jobs'}
          leftIcon={'menu'}
          rightIcon={'ios-notifications-outline'}
          rightIconType={'ionicon'}
        />
        {/*Container*/}
        <View style={styles.container}>
          {renderTopContent()}
          {renderCenterContent()}
        </View>
      </View>
    
  );
};
