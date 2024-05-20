import {StyleSheet, TextStyle} from 'react-native';
import {normalize} from './metrics';
import {colors} from './colors';

export const jostFonts = {
  600: 'Jost-SemiBold',
};
export const mulishFonts = {
  700: 'Mulish-Bold',
  800: 'Mulish-ExtraBold',
};
const fontsize16 = normalize('font', 16);
const fontsize20 = normalize('font', 20);
const fontsize15 = normalize('font', 15);
const fontsize14 = normalize('font', 14);
const fontsize18 = normalize('font', 18);
const fontsize24 = normalize('font', 24);
const fontsize32 = normalize('font', 32);
const fontsize40 = normalize('font', 40);
const fontsize48 = normalize('font', 48);
const fontsize52 = normalize('font', 52);
const fontsize56 = normalize('font', 56);
const fontsize64 = normalize('font', 64);
const fontsize72 = normalize('font', 72);
const fontsize80 = normalize('font', 80);
const fontsize96 = normalize('font', 96);
const fontsize112 = normalize('font', 112);

const lineHeight24 = normalize('height', 24);
const lineHeight34 = normalize('height', 34);
const lineHeight26 = normalize('height', 26);

const commonFontStyling: TextStyle = {
  includeFontPadding: false,
  padding: 0,
  color: 'white',
};
export const Typography = StyleSheet.create({
  smallJostSemibold: {
    ...commonFontStyling,
    fontSize: fontsize16,
    fontFamily: jostFonts[600],
  },
  mediumJostSemibold: {
    ...commonFontStyling,
    fontSize: fontsize18,
    fontFamily: jostFonts[600],
    lineHeight: lineHeight26,
  },
  largeJostSemiBold2: {
    ...commonFontStyling,
    fontSize: fontsize24,
    fontFamily: jostFonts[600],
    lineHeight: lineHeight34,
  },
  largeJostSemibold: {
    ...commonFontStyling,
    fontSize: fontsize32,
    fontFamily: jostFonts[600],
  },
  smallMulishBold: {
    ...commonFontStyling,
    fontSize: fontsize16,
    fontFamily: mulishFonts[700],
  },
  smallMulishBold14:{
    ...commonFontStyling,
    fontSize: fontsize14,
    fontFamily: mulishFonts[700],
  },
  mediumMulishBold: {
    ...commonFontStyling,
    fontSize: fontsize24,
    fontFamily: mulishFonts[700],
  },
  smallMulishExtraBold: {
    ...commonFontStyling,
    fontSize: fontsize15,
    fontFamily: mulishFonts[800],
  },
  textAlignCenter: {
    textAlign: 'center',
  },
});
