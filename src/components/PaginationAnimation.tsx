import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {useSharedValue} from 'react-native-reanimated';
import {colors} from '../constants/colors';

export const PaginationAnimation = () => {
  const width = useSharedValue(10);
  return (
    <View>
      <Animated.View
        style={{
          width,
          height: 10,
          backgroundColor: colors.black.light,
          borderRadius: 10,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
