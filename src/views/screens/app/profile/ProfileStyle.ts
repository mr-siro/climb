import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '@shared';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topContent: {
    paddingVertical: Metrics.spacing.medium,
    alignItems: 'center',
  },

  centerContent: {
    flex: 1,
    flexGrow: 3,
  },

  introduce: {
    alignItems: 'center',
    paddingVertical: Metrics.spacing.medium,
  },
  name: {
    fontSize: Metrics.FontSize.large,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  completeIntro: {
    color: Colors.Text.textAcient,
    fontSize: Metrics.FontSize.large,
    lineHeight: 24,
  },
  wrapperList: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    backgroundColor: 'white',
    elevation: 6,
    marginBottom: 10,
    paddingHorizontal: Metrics.spacing.medium,
  },
  wrapperTitleList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.Gray,
    paddingVertical: Metrics.spacing.medium,
  },

  modalContainer:{
    padding: Metrics.spacing.large,
    backgroundColor: Colors.White,
    borderRadius: 10,
    justifyContent: 'center',
  },
  headerModal:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export {styles};
