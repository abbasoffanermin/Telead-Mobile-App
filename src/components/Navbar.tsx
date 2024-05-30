import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SvgImage} from './SvgImage';
import {colors} from '../constants/colors';
import {Typography} from '../constants/typography';
import {CommonStyles} from '../constants/common.styles';
import {normalize} from '../constants/metrics';
type Tleft = 'icon' | 'icon-text';
type Tright = 'icon' | 'text';
interface leftI {
  icon?: React.ReactNode;
  text?: string;
  onPress?: () => void;
}
interface INavbar {
  lefticonAction?: Tleft;
  righticonAction?: Tright;
  leftCaption?: string;
  left?: leftI;
  right?: {
    icon?: React.ReactNode;
    text?: string;
  };
}

const renderLeft = (lefticonAction, left) => {
  switch (lefticonAction) {
    case 'icon':
      return (
        <SvgImage
          onPress={left.onPress}
          source={left.icon}
          width={27}
          height={20}
          color={colors.secondary.main}
        />
      );
    case 'icon-text':
      return (
        <Pressable style={styles.left} onPress={left.onPress}>
          <SvgImage
            source={left.icon}
            width={22}
            height={15}
            color={colors.secondary.main}
          />
          <Text style={styles.leftText}>{left.text}</Text>
        </Pressable>
      );
  }
};
const renderRight = (righticonAction, right) => {
  switch (righticonAction) {
    case 'icon':
      return (
        <SvgImage
          source={right.icon}
          width={27}
          height={20}
          color={colors.secondary.main}
        />
      );
    case 'text':
      return <Text>{right.text}</Text>;
  }
};
export const Navbar: React.FC<INavbar> = ({
  lefticonAction,
  righticonAction,
  leftCaption,
  left,
  right,
}) => {
  return (
    <View style={styles.container}>
      <View style={!lefticonAction ? styles.hide : styles.left}>
        {lefticonAction ? renderLeft(lefticonAction, left) : null}
      </View>
      <Text style={styles.center}>Test</Text>
      <View style={!righticonAction ? styles.hide : styles.right}>
        {righticonAction ? renderRight(righticonAction, right) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.flexAlignRow,
    gap: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize('horizontal', 37),
    height: normalize('height', 70),
    borderRadius: 10,
  },
  leftText: {
    ...Typography.mediumJostSemibold,
    color: colors.secondary.main,
  },
  center: {
    ...CommonStyles.flexAlignRow,
    opacity: 0,
    flexGrow: 0.6,
    marginTop: 37,
  },
  left: {
    ...CommonStyles.flexAlignRow,
    gap: 6,
    marginTop: 21,
    flexGrow: 0.2,
  },
  hide: {
    opacity: 0,
  },
  right: {
    ...CommonStyles.flexAlignRow,
    gap: 12,
    alignItems: 'center',
    marginTop: 45,
    flexGrow: 0.1,
  },
});
