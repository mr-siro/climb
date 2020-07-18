export interface IFontSize {
  tiny: number;
  small: number;
  normal: number;
  medium: number;
  large: number;
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  h5: number;
  h6: number;
}
export interface IMetric {
  spacing: {
    extraTiny: number;
    tiny: number;
    small: number;
    medium: number;
    large: number;
    extraLarge: number;
    huge: number;
    extraHuge: number;
    giant: number;
    xl: number;
  };
}

export interface IColors {
  White: string;
  Gray: string;
  Primary: string;
  tabBar: {
    Active: string;
  };
  Text: {
    textPrimary: string;
    textAcient: string;
  };
  Button: {
    BackgroundBlue: string;
    BackgroundGreen: string;
  };
}
