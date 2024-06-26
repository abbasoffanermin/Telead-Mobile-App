import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {normalize} from '../constants/metrics';
import {SvgImage} from './SvgImage';
import {CommonStyles} from '../constants/common.styles';
import {Typography} from '../constants/typography';

interface IMainButton {
  title?: string;
  onPress?: () => void;
  icon?: any;
  costumwidth: 350 | 200 | 60;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}
export const MainButton: React.FC<IMainButton> = ({
  title,
  onPress,
  icon,
  costumwidth,
  disabled,
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        style,
        costumwidth !== 60 ? [CommonStyles.justifyBetweenRow, {gap: 20}] : null,
        disabled ? {opacity: 0.6} : null,
      ]}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {icon ? (
        <View style={costumwidth !== 60 ? styles.arrow : null}>
          <SvgImage
            source={icon}
            width={27}
            height={22}
            color={costumwidth === 60 ? 'white' : colors.primary.main}
          />
        </View>
      ) : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary.main,
    padding: 50,
    paddingHorizontal: 30,
    paddingVertical: 17,
    borderRadius: 60,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    alignSelf: 'center',
    justifyContent: 'space-between',
    
    height: 60,
    
  },
  arrow: {
    width: normalize('width', 45),
    height: normalize('height', 45),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 25,
    
    backgroundColor: 'white',
    borderRadius: 60,
  },
  title: {
    color: 'white',
    ...Typography.mediumJostSemibold,
    
  },
});
