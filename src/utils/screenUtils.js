import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';

export const pixelRatio = PixelRatio.get();
export const defaultPixel = 2; // provided in design 2px
const fontScale = PixelRatio.getFontScale();
const defaultWidth = 375;
// const defaultHeight = 667

const iPadWidth = 768;
const iPadHeight = 1024;

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

// Ipad
export const scaleIpadWidth = size => (deviceWidth / iPadWidth) * size;
export const scaleIpadHeight = size => (deviceHeight / iPadHeight) * size;

/*
 * width ,paddingHorizontal ,paddingLeft ,paddingRight ,marginHorizontal ,marginLeft ,marginRight
 * @param size
 * @returns {number}
 */
export function scaleSize(size) {
  const w = Dimensions.get('window').width;
  const h = Dimensions.get('window').height;
  const widthReference = w / defaultWidth;
  const screenRatio = w > h ? h / w : w / h;
  return screenRatio > 0.8 ? size : size * widthReference;
}

/*
 * height ,paddingVertical ,paddingTop ,paddingBottom ,marginVertical ,marginTop ,marginBottom
 * @param size
 * @returns {number}
 */
export function scaleHeight(size) {
  const w = Dimensions.get('window').width;
  const h = Dimensions.get('window').height;
  const widthReference = w / defaultWidth;
  const screenRatio = w > h ? h / w : w / h;
  return screenRatio > 0.8 ? size : size * widthReference;
}

/**
 * @param size  allowFontScaling
 * @returns {Number}
 */
export function scaleFontSize(size, allowFontScaling = true) {
  const w = Dimensions.get('window').width;
  const h = Dimensions.get('window').height;
  const widthReference = w / defaultWidth;
  const screenRatio = w > h ? h / w : w / h;
  const fontSize = allowFontScaling ? 1 : fontScale;
  return screenRatio > 0.8 ? size : (size * widthReference) / fontSize;
}

/**
 * statusbar, react native StatusBar.currentHeight
 * @param ignoreAndroid  return 0 on android if set true
 */
export function getStatusBarHeight(ignoreAndroid = false) {
  return Platform.select({
    ios: hasNotch() ? 44 : 20,
    android: ignoreAndroid ? 0 : StatusBar.currentHeight,
    default: 0,
  });
}

/**
 * deviceHeight
 */
export function getAndroidScreenHeight() {
  if (Platform.OS !== 'android') {
    return deviceHeight;
  }
  if (ExtraDimensions.isSoftMenuBarEnabled()) {
    return deviceHeight - ExtraDimensions.getStatusBarHeight();
  }
  return (
    ExtraDimensions.getRealWindowHeight() -
    ExtraDimensions.getStatusBarHeight() -
    ExtraDimensions.getSoftMenuBarHeight()
  );
}

export const isAndroid = () => Platform.OS === 'android';

export const hasNotch = () => {
  // Check if the device is iOS
  if (Platform.OS === 'ios') {
    // Check if the device is iPhone X or later (which typically have a notch)
    return (
      Dimensions.get('window').height >= 812 && // iPhone X, XS, 11 Pro
      !Platform.isPad && // Exclude iPad
      !Platform.isTVOS && // Exclude TVOS
      !Platform.isMacCatalyst // Exclude Mac Catalyst
    );
  } else {
    // Check if the device uses Android and has a notch (may vary based on device)
    return (
      StatusBar.currentHeight && StatusBar.currentHeight > 24 // Typical notch height on Android devices
    );
  }
};
