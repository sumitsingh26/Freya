import {StyleSheet} from 'react-native';
import {scaleFontSize, scaleHeight, scaleSize} from './screenUtils';
import {appColors} from './constant';

export const globalStyle = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
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
  dividerStyle: {
    width: '100%',
    height: 1,
    backgroundColor: appColors.Primary,
    marginVertical: 10,
  },
  font18500: {
    fontWeight: '500',
    fontSize: scaleFontSize(18),
    lineHeight: 27,
  },
  font22600: {
    fontWeight: '600',
    fontSize: scaleFontSize(22),
  },
  rowCenterContent: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  round: {
        backgroundColor: appColors.Primary,
    borderRadius: 15,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    padding: 5,
    overflow : 'hidden'
  }
});

export const globalFontStyle = (fontSize, fontWeight, color) => {
  return StyleSheet.create({
    text: {
      fontSize: fontSize || 16, // Default font size if not provided
      fontWeight: fontWeight || 'normal', // Default font weight if not provided
      color: color || 'black',
      textAlign: 'auto',
    },
    centerText: {
      fontSize: fontSize || 16, // Default font size if not provided
      fontWeight: fontWeight || 'normal', // Default font weight if not provided
      color: color || 'black',
      textAlign: 'center',
    },
  });
};
