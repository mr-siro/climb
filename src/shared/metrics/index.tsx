import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

// const Resize = Dimensions.get('window').height / 812;
const Resize = 1;
const Metrics = {
  baseMargin: Resize * 2,
  baseRadius: Resize * 5,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  icons: {
    tiny: Resize * 14,
    small: Resize * 20,
    medium: Resize * 25,
    large: Resize * 30,
    xl: Resize * 40,
  },
  images: {
    small: Resize * 20,
    medium: Resize * 40,
    large: Resize * 60,
    logo: Resize * 200,
  },
  spacing: {
    extraTiny: 2,
    tiny: 4,
    small: 8,
    medium: 12,
    large: 16,
    extraLarge: 24,
    huge: 28,
    extraHuge: 32,
    giant: 40,
  },
  FontSize: {
    tiny: 8,
    small: 10,
    normal: 12,
    medium: 14,
    large: 16,
    h1: 28,
    h2: 26,
    h3: 24,
    h4: 22,
    h5: 20,
    h6: 18,
  },
};

export {Metrics};
