import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {normalize} from '../constants/metrics';
import {SvgImage} from './SvgImage';
import {colors} from '../constants/colors';
import {CommonStyles} from '../constants/common.styles';
import {Typography} from '../constants/typography';

export interface IMainInput {
  type: TextInput['props']['keyboardType'];
  placeholder?: string;
  style?: StyleProp<TextStyle>;
  icon?: React.ReactNode;
  securitytype?: boolean;
  setValue?: any;
  value?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  errorMessage?: string;
}

export const MainInput: React.FC<IMainInput> = ({
  placeholder,
  style,
  onBlur,
  onFocus,
  icon,
  type,
  value,
  errorMessage,
  setValue,
  ...props
}) => {
  const [hide, setHide] = React.useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);
  const handleOnFocused = () => {
    setFocused(true);
    onFocus?.();
  };
  const handleOnBlur = () => {
    setFocused(false);
    onBlur?.();
  };
  return (
    <View>
      <View style={[styles.container, errorMessage ? styles.error : null]}>
        <View style={styles.cont}>
          {icon ? <SvgImage source={icon} color={colors.black.main} /> : null}

          <TextInput
            placeholder={placeholder}
            style={styles.input}
            value={value}
            onFocus={handleOnFocused}
            onBlur={handleOnBlur}
            placeholderTextColor={colors.black.lighter}
            onChangeText={setValue}
            // onBlur={onBlur}
            keyboardType={type === 'visible-password' ? 'default' : type}
            secureTextEntry={type === 'visible-password' ? !hide : false}
          />
        </View>
        {type === 'visible-password' ? (
          <SvgImage
            source={
              hide
                ? require('../assets/images/hide.svg')
                : require('../assets/images/show.svg')
            }
            color={colors.black.main}
            width={20}
            height={20}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            onPress={() => setHide(pre => !pre)}
          />
        ) : null}
      </View>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize('horizontal', 20),
    gap: 8,
    width: normalize('width', 360),
    height: normalize('height', 60),
    borderRadius: 10,
  },
  error: {
    borderColor: 'red',
    borderWidth: 1,
  },
  cont: {
    ...CommonStyles.flexAlignRow,
    gap: 8,
  },
  input: {
    ...Typography.smallMulishBold14,
    color: colors.black.main,
    width: normalize('width', 270),
    height: '100%',
  },
  errorMessage: {
    ...Typography.smallMulishBold14,
    color: 'red',
    marginTop: 10,
  },
});
