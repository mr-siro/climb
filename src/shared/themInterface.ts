import {IFontSize, IMetric, IColors} from './fontInterface';

export interface ITheme {
  font: {
    Regular: string;
    Medium: string;
    Bold: string;
    Light: string;
  };
  FontSize: IFontSize;
  Metrics: IMetric;
  Colors: IColors;
  [key: string]: any;
}


