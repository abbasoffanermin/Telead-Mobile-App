import {OnBoarding} from '../mocks/data';
import React from 'react';
import {useEffect} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {colors} from '../constants/colors';
import {CommonStyles} from '../constants/common.styles';
import {normalize} from '../constants/metrics';

interface IDot {
  index: number;
  animatedIndex: SharedValue<number>;
}

interface IPagination {
  selectedIndex: number;
  style?: StyleProp<ViewStyle>;
}

const Dot: React.FC<IDot> = ({index, animatedIndex}) => {
  const animatedDot = useAnimatedStyle(() => {
    return {
      width: interpolate(
        animatedIndex.value,
        [index - 1, index, index + 1],
        [dotSize, dotSize, dotSize],
        Extrapolation.CLAMP,
      ),
      backgroundColor: interpolateColor(
        animatedIndex.value,
        [index - 1, index, index + 1],
        [colors.black.light, colors.black.light, colors.primary.main],

      ),
    };
  });

  return <Animated.View style={[styles.dot, animatedDot]} />;
};

export const Pagination: React.FC<IPagination> = ({selectedIndex, style}) => {
  const animatedIndex = useSharedValue(selectedIndex);

  useEffect(() => {
    animatedIndex.value = withTiming(selectedIndex, {duration: 200});
  }, [animatedIndex, selectedIndex]);

  const renderDots = (_: unknown, index: number) => (
    <Dot key={index} index={index} animatedIndex={animatedIndex} />
  );

  return (
    <View style={[CommonStyles.alignCenterJustifyBetweenRow, style]}>
      <View style={styles.dots}>{OnBoarding.map(renderDots)}</View>
    </View>
  );
};

const dotSize = normalize('width', 8);

const styles = StyleSheet.create({
  dots: {
    gap: normalize('horizontal', 8),
    ...CommonStyles.alignJustifyCenterRow,
  },
  dot: {
    width: dotSize,
    height: dotSize,
    borderRadius: 28,
  } as ViewStyle,
  controller: {
    paddingHorizontal: normalize('horizontal', 20),
    paddingVertical: normalize('vertical', 12),
    backgroundColor: colors.black.main,
    borderRadius: 48,
  } as ViewStyle,
  hide: {
    opacity: 0,
  } as ViewStyle,
});
