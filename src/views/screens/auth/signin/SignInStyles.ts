import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '@shared';

const styles = StyleSheet.create({
  headerContainer: {
    flexGrow: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flexGrow: 3,
  },
  footerContainer: {
    flexGrow: 0.5,
  },
  textLogo: {
    color: Colors.Primary,
    fontSize: 30,
  },

  inputContainer: {
    paddingHorizontal: Metrics.spacing.extraHuge,
    justifyContent: 'center',
    alignContent: 'center',
  },

  signInBtnContainer: {
    alignItems: 'center',
    marginVertical: '15%',
  },
  signInBtn: {
    width: 203,
    height: 45,
    backgroundColor: Colors.Primary,
    borderRadius: 30,
  },
  forgetPwd: {
    textAlign: 'center',
    fontSize: Metrics.FontSize.large,
    color: '#9B9B9B',
  },
});

export {styles};
