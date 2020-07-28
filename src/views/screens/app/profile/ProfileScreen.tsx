import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Switch,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {Button, Icon, Input} from 'react-native-elements';

import ProgressCircle from 'react-native-progress-circle';
import {MyHeader} from '@components';
import {styles} from './ProfileStyle';
import {Images} from '@assets';
import {Colors, Metrics} from '@shared';
import {listIntro} from '@services';
import {SupportText, Dots, Title} from '@styles';
import Modal from 'react-native-modal';
import {WrapperList} from './components/wrapper/WrapperList';
import {IntroProps, AboutItems, Educations, Exeriances} from './Constant';
import DropDownPicker from 'react-native-dropdown-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export enum ModalKey {
  ABOUT = 'About',
  EDUCATION = 'Education',
  EXPERIENCE = 'Experience',
}

export const ProfileScreen = () => {
  const [list, setList] = useState(listIntro),
    [isModalVisible, setModalVisible] = useState(false),
    [modalKey, SetModalKey] = useState(''),
    [deFault, setDeFault] = useState('Manager'),
    [activeId, setActiveId] = useState(''),
    [aboutValue, setAboutValue] = useState(''),
    [nameSchool, setNameSchool] = useState(''),
    [isEnabled, setIsEnabled] = useState(false),
    [company, setCompany] = useState(''),
    [year, setYear] = useState(''),
    [formId, setFormId] = useState('');
  const position = [
    {label: 'Manager', value: 'Manager'},
    {label: 'Employee', value: 'Employee'},
  ];
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  // open button +Add
  const pressButton = (item: IntroProps) => {
    openAddForm(item.type);
    item.type == 1
      ? SetModalKey(ModalKey.ABOUT)
      : item.type == 2
      ? SetModalKey(ModalKey.EDUCATION)
      : SetModalKey(ModalKey.EXPERIENCE);
    setActiveId(item.id);
  };

  // open form modal
  const openAddForm = (type: number) => {
    const filteredData = list.find((item) => item.type == type);

    if (filteredData) {
      setModalVisible(!isModalVisible);
    }
  };

  const deletedTitle = (id: string, idData: string) => {
    const mapData = [...list];
    const groupItem = mapData.find((item) => item.id === id) as IntroProps;
    if (groupItem) {
      const childItem = groupItem.data.find(
        (childItem) => childItem.idData === idData,
      );
      const indexOf = groupItem.data.indexOf(childItem);
      if (indexOf !== -1) {
        groupItem.data.splice(indexOf, 1);
        setList(mapData);
      } else {
        // Da co loi xay ra
      }
    } else {
      // Da co loi xay ra
    }
  };

  // render header Modal
  const renderHeaderModal = () => (
    <View style={styles.headerModal}>
      <Title>
        {modalKey == ModalKey.ABOUT
          ? 'About yourself'
          : modalKey == ModalKey.EDUCATION
          ? 'Education'
          : 'Work Experience'}
      </Title>
      <Icon
        color={'#fd1d1d'}
        type={'font-awesome'}
        name={'window-close'}
        onPress={() => setModalVisible(!isModalVisible)}
      />
    </View>
  );

  const onAddAboutForm = (id: string, data: AboutItems) => {
    const mapData = [...list];
    const groupItem = mapData.find((item) => item.id === id) as IntroProps;
    if (groupItem) {
      groupItem.data.push(data);
    }
    setList(mapData);
  };

  const onAddEducationForm = (id: string, data: Educations) => {
    const mapData = [...list];
    const groupItem = mapData.find((item) => item.id === id) as IntroProps;
    if (groupItem) {
      groupItem.data.push(data);
    }
    setList(mapData);
  };

  const onAddExperianForm = (id: string, data: Exeriances) => {
    const mapData = [...list];
    const groupItem = mapData.find((item) => item.id === id) as IntroProps;
    if (groupItem) {
      groupItem.data.push(data);
    }
    setList(mapData);
  };

  const editAboutform = (id: string, idData: string) => {
    const mapData = list.find((item) => item.id === id);
    if (mapData) {
      const childItem = mapData.data.find(
        (childItem) => childItem.idData === idData,
      ) as AboutItems;
      if (childItem) {
        setFormId(childItem.idData);
        setAboutValue(childItem.titleData);
        setModalVisible(!isModalVisible);
      }
    }
  };

  const editEducationform = (id: string, idData: string) => {
    const mapData = list.find((item) => item.id === id);
    if (mapData) {
      const childItem = mapData.data.find(
        (childItem) => childItem.idData === idData,
      ) as Educations;
      if (childItem) {
        setFormId(childItem.idData);
        setNameSchool(childItem.titleData);
        setIsEnabled(childItem.isGrad);
        setModalVisible(!isModalVisible);
      }
    }
  };

  const editExperianform = (id: string, idData: string) => {
    const mapData = list.find((item) => item.id === id);
    if (mapData) {
      const childItem = mapData.data.find(
        (childItem) => childItem.idData === idData,
      ) as Exeriances;
      if (childItem) {
        setFormId(childItem.idData);
        setCompany(childItem.titleData);
        setYear(childItem.year);
        // setDeFault(childItem.valueDefault);
        setModalVisible(!isModalVisible);
      }
    }
  };

  // aboutform
  const renderAboutForm = () => (
    <View>
      <Input
        multiline={true}
        value={aboutValue}
        placeholder={'Write something...'}
        onChangeText={(text) => setAboutValue(text)}
      />
      <View style={{alignItems: 'center'}}>
        <Button
          title={'Save'}
          disabled={!aboutValue ? true : false}
          buttonStyle={{width: 123, height: 45, borderRadius: 30}}
          onPress={() => {
            onAddAboutForm(activeId, {
              idData: Math.random().toString(),
              titleData: aboutValue,
            });
            setAboutValue('');
            setModalVisible(!isModalVisible);
          }}
        />
      </View>
    </View>
  );

  // educationform
  const renderEducationForm = () => (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Dots>♦</Dots>
        <Text style={{fontWeight: 'bold'}}>Your school</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{width: '30%'}}>Name School</Text>
        <Input
          value={nameSchool}
          onChangeText={(text) => setNameSchool(text)}
          placeholder={'Add your school'}
          containerStyle={{width: '70%'}}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Graduated</Text>
        <Switch
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Button
          title={'Save'}
          disabled={!nameSchool ? true : false}
          buttonStyle={{width: 123, height: 45, borderRadius: 30}}
          onPress={() => {
            onAddEducationForm(activeId, {
              idData: Math.random().toString(),
              titleData: nameSchool,
              isGrad: isEnabled,
            });
            setNameSchool('');
            setModalVisible(!isModalVisible);
          }}
        />
      </View>
    </View>
  );

  // Experian form
  const renderExperianForm = () => (
    <View>
      <View style={{flexDirection: 'row', paddingVertical: 12}}>
        <Dots>♦</Dots>
        <Text style={{fontWeight: 'bold'}}>Resume</Text>
      </View>
      <Text>Don’t have one. Don’t sweat it. We got you.</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{width: '30%'}}>Company</Text>
        <Input
          containerStyle={{width: '70%'}}
          value={company}
          onChangeText={(text) => setCompany(text)}
          placeholder={'Add your company'}
        />
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{width: '30%'}}>Year</Text>
        <Input
          containerStyle={{width: '70%'}}
          value={year}
          onChangeText={(text) => setYear(text)}
          placeholder={'Year'}
          keyboardType={'number-pad'}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{width: '30%'}}>Position:</Text>
        <DropDownPicker
          items={position}
          defaultValue={deFault}
          containerStyle={{width: '70%', height: 40}}
          onChangeItem={(item) => setDeFault(item.value)}
          itemStyle={{
            justifyContent: 'flex-start',
            zIndex: 1,
          }}
        />
      </View>
      <View style={{alignItems: 'center', paddingTop: 12, zIndex: -1}}>
        <Button
          title={'Save'}
          buttonStyle={{width: 123, height: 45, borderRadius: 30}}
          disabled={!company || !year ? true : false}
          onPress={() => {
            onAddExperianForm(activeId, {
              idData: Math.random().toString(),
              titleData: company,
              year: year,
              valueDefault: deFault,
            });
            setCompany('');
            setYear('');
            setModalVisible(!isModalVisible);
          }}
        />
      </View>
    </View>
  );

  const renderItem = (item: IntroProps, index: number) => {
    return (
      <WrapperList
        icon={item.icon}
        title={item.title}
        onPress={() => pressButton(item)}>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: Metrics.spacing.medium,
          }}>
          <View style={{flex: 1}}>
            {item.data.map((x, index) => (
              <View key={index} style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <View style={{flexDirection: 'row'}}>
                    <Dots>♦</Dots>

                    <Text>{x.titleData}</Text>
                  </View>

                  <SupportText style={{marginLeft: Metrics.spacing.extraLarge}}>
                    {item.type == 3
                      ? x.valueDefault
                      : item.type == 2
                      ? x.isGrad == true
                        ? 'Graduated'
                        : 'No Graduation'
                      : ''}
                  </SupportText>
                </View>
                <SupportText>{x.year}</SupportText>
                <View style={{flexDirection: 'row', marginLeft: 8}}>
                  <Icon
                    color={'#fd1d1d'}
                    type={'font-awesome'}
                    name={'trash-o'}
                    onPress={() => deletedTitle(item.id, x.idData)}
                  />
                  <Icon
                    iconStyle={{paddingLeft: 4}}
                    color={'#4fb423'}
                    name={'create'}
                    onPress={() =>
                      item.type === 1
                        ? editAboutform(item.id, x.idData)
                        : item.type === 2
                        ? editEducationform(item.id, x.idData)
                        : editExperianform(item.id, x.idData)
                    }
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
      </WrapperList>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <KeyboardAwareScrollView>
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
              color={'#10C105'}
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
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <Modal isVisible={isModalVisible}>
                <View style={styles.modalContainer}>
                  {renderHeaderModal()}
                  {modalKey == ModalKey.ABOUT
                    ? renderAboutForm()
                    : modalKey == ModalKey.EDUCATION
                    ? renderEducationForm()
                    : renderExperianForm()}
                </View>
              </Modal>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
