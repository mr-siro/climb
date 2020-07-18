import React from 'react';
import {View, StyleSheet, Text, ViewStyle} from 'react-native';
import {Button} from 'react-native-elements';
import {Metrics, Colors} from '@shared';
export interface FooterProps {
  authTitle?: string;
  onAuthPress?: () => void;
  contentStyle?: ViewStyle;
  socialContainer?: ViewStyle;
  authBtnContainer?: ViewStyle;
  onFbPress?: () => void;
  onGgPress?: () => void;
}

export const FooterComponent = (props: FooterProps) => {
  return (
    <View style={[styles.footerContent, props.contentStyle]}>
      <View style={[styles.socialContainer, props.socialContainer]}>
        <Button
          titleStyle={styles.titleSocial}
          buttonStyle={styles.fbBtn}
          title={'f'}
          onPress={props.onFbPress}
        />
        <Button
          titleStyle={styles.titleSocial}
          buttonStyle={styles.ggBtn}
          title={'G'}
          onPress={props.onGgPress}
        />
      </View>
      <View style={[styles.authBtnContainer, props.authBtnContainer]}>
        <Text style={{marginRight: 10, fontSize: 16}}>or</Text>
        <Text onPress={props.onAuthPress} style={styles.authText}>
          {props.authTitle}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContent: {
    justifyContent: 'flex-end',
    flexDirection:'row'
  },
  socialContainer: {
    flexDirection: 'row',
  },
  authBtnContainer: {
    backgroundColor: Colors.Gray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.spacing.giant,
  },
  fbBtn: {
    borderRadius: 150,
    width: 45,
    height: 45,
  },
  ggBtn: {
    borderRadius: 150,
    width: 45,
    height: 45,
    backgroundColor: '#D0021B',
    marginHorizontal: Metrics.spacing.large,
  },
  authText: {fontSize: Metrics.FontSize.large, fontWeight: 'bold'},
  titleSocial: {
    fontWeight: 'bold',
    fontSize: Metrics.FontSize.h3,
  },
});
