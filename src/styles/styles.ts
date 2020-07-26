import styled from 'styled-components';
import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '@shared';
const SupportText = styled.Text`
  color: ${Colors.Text.textSupport};
  lineHeight: 24px;
`;
const Dots = styled.Text`
  color: ${Colors.Primary};
  marginRight: ${Metrics.spacing.medium}px;
`;

const Title = styled.Text`
  fontSize: ${Metrics.FontSize.large}px;
  fontWeight: bold;
  marginLeft: 12px;

`;
 export {SupportText,Dots,Title};