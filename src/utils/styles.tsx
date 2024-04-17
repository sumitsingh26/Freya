import {StyleSheet} from 'react-native';
import {scaleFontSize, scaleHeight, scaleSize} from './screenUtils';
import {appColors} from './constant';

export const globalStyle = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  logoStyle: {
    height: scaleHeight(45),
    width: scaleSize(110),
    marginTop: scaleHeight(65),
    marginBottom: scaleHeight(20),
  },
  textStyle: {
    fontWeight: '600',
    fontSize: scaleFontSize(16),
    lineHeight: 24,
    color: appColors.TextPrimary,
  },
  errorMessageStyle: {
    fontWeight: '300',
    fontSize: scaleFontSize(12),
    color: 'red',
    marginStart: scaleSize(10),
  },
});
