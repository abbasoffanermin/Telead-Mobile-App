import {PixelRatio} from 'react-native';

import {
  windowHeight as deviceHeight,
  windowWidth as deviceWidth,
} from './const.styles';

/**
 * Layout height and width from design
 */
const layoutWidth = 428;
const layoutHeight = 926;

const widthScaleFactor = deviceWidth / layoutWidth;
const heightScaleFactor = deviceHeight / layoutHeight;

let maxFont = PixelRatio.getFontScale();

const fontScales = [
  {limit: 1.28, value: 0},
  {limit: 1.6, value: 2},
  {limit: 2, value: 4},
  {limit: 2.5, value: 5},
  {limit: 3, value: 7},
  {limit: 3.5, value: 8},
  {limit: Infinity, value: 8.8},
];

let fontScaleValue = (
  fontScales.find(scale => maxFont <= scale.limit) || {value: 0}
).value;

/**
 * Normalize the width value based on the device's screen size and the designed layout width.
 * @param size - The width value to be normalized.
 * @returns The normalized width value.
 */
function normalizeWidth(size: number) {
  const resizedWidth = size * widthScaleFactor;
  return Math.round(PixelRatio.roundToNearestPixel(resizedWidth));
}

/**
 * Normalize the height value based on the device's screen size and the designed layout height.
 * @param size - The height value to be normalized.
 * @returns The normalized height value.
 */
function normalizeHeight(size: number) {
  const resizedHeight = size * heightScaleFactor;
  return Math.round(PixelRatio.roundToNearestPixel(resizedHeight));
}

/**
 * Convert a size value to pixel width.
 * @param size - The size value to be converted.
 * @returns The converted pixel width value.
 */
const pixelWidth = (size: number): number => {
  return normalizeWidth(size);
};

/**
 * Convert a size value to pixel height.
 * @param size - The size value to be converted.
 * @returns The converted pixel height value.
 */
const pixelHeight = (size: number): number => {
  return normalizeHeight(size);
};

/**
 * Convert a size value to pixel font size.
 * @param size - The size value to be converted.
 * @returns The converted pixel font size value.
 */
const pixelFont = (size: number): number => {
  return pixelHeight(size - fontScaleValue);
};

/**
 * Convert a size value to pixel value for margin and padding in the vertical direction.
 * @param size - The size value to be converted.
 * @returns The converted pixel value for margin and padding in the vertical direction.
 */
const pixelVertical = (size: number): number => {
  return pixelHeight(size);
};

/**
 * Convert a size value to pixel value for margin and padding in the horizontal direction.
 * @param size - The size value to be converted.
 * @returns The converted pixel value for margin and padding in the horizontal direction.
 */
const pixelHorizontal = (size: number): number => {
  return pixelWidth(size);
};

const normalizeFunctions = {
  width: pixelWidth,
  font: pixelFont,
  height: pixelHeight,
  vertical: pixelVertical,
  horizontal: pixelHorizontal,
  // radius: pixelBorderRadius,
};

export const normalize = (
  func: keyof typeof normalizeFunctions,
  px: number,
): number => normalizeFunctions[func](px);
