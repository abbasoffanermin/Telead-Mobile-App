import {Dimensions as NativeSizes} from 'react-native';

const Dimensions = [NativeSizes.get('window'), NativeSizes.get('screen')];

const windowWidth = Dimensions[0]?.width ?? 0;
const windowHeight = Dimensions[0]?.height ?? 0;
const screenWidth = Dimensions[1]?.width ?? 0;
const screenHeight = Dimensions[1]?.height ?? 0;

const activeOpacityIndex = 0.8;
const standardHitSlopSize = 12;
const smallHitSlopSize = 8;

export {
  activeOpacityIndex,
  standardHitSlopSize,
  smallHitSlopSize,
  screenHeight,
  screenWidth,
  windowHeight,
  windowWidth,
};