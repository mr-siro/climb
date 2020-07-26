import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '@shared';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContent: {
    flexGrow: 0.5,
    paddingHorizontal: Metrics.spacing.medium,
  },
  centerContent: {
    flexGrow: 4.5,
    flex: 1,
  },
  inputContainer: {},
  recommendRow: {
    flexDirection: 'row',
    paddingHorizontal: Metrics.spacing.medium,
    paddingTop: Metrics.spacing.medium,
  },
 
  sliderStyle: {
    marginHorizontal: Metrics.spacing.huge,
    justifyContent: 'center',
  },
  loadingStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export {styles};
