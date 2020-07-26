import * as styledComponents from 'styled-components/native';

import {ITheme} from '@shared';

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<
  ITheme
>;

export {css, ThemeProvider};
export default styled;
