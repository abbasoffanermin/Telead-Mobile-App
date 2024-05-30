import React, {useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';

import {colors} from '../constants/colors';
import {CommonStyles} from '../constants/common.styles';
import {normalize} from '../constants/metrics';
import {Typography} from '../constants/typography';

type IOtpCodeField = {
  setCode: (code: string) => void;
  code?: string;
  triggerOnFinish?: () => void;
  length?: number;
  style?: StyleProp<ViewStyle>;
};

export const OtpCodeField: React.FC<IOtpCodeField> = ({
  setCode,
  code = '',
  length = 4,
  triggerOnFinish,
  style,
}) => {
  const boxArray = new Array(length).fill(0);

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const renderBoxDigit = (digit: string, index: number) => {
    const focus = isFocused && index === code?.length && code.length !== length;

    return (
      <View style={[styles.box, focus && styles.focusedBox]} key={index}>
        <Text style={[Typography.mediumMulishBold, {color: 'black'}]}>
          {focus ? '|' : digit}
        </Text>
      </View>
    );
  };

  const handleTextChange = (text: string) => {
    setCode(text);
    if (text.length === length) {
      triggerOnFinish?.();
    }
  };

  const handleOnBlur = () => setIsFocused(false);

  return (
    <View style={style}>
      <View style={styles.cellView}>
        {boxArray.map((_, index) => renderBoxDigit(code[index] || '', index))}
      </View>
      <TextInput
        value={code}
        onChangeText={handleTextChange}
        maxLength={length}
        keyboardType="number-pad"
        contextMenuHidden
        onFocus={() => setIsFocused(true)}
        onBlur={handleOnBlur}
        style={[styles.textInput, {color: 'black'}]}
        accessibilityLabel="OTP Input"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0,
  },
  cellView: {
    gap: normalize('horizontal', 20),
    ...CommonStyles.alignCenterJustifyBetweenRow,
  },
  box: {
    flex: 1,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 12,
    backgroundColor: colors.primary.bg,
    borderColor: '#D3D3D3',
    height: normalize('height', 60),
    width: normalize('width', 75),
    ...CommonStyles.alignJustifyCenter,
  },
  focusedBox: {
    borderColor: colors.primary.main,
    borderWidth: 2,
  },
});
