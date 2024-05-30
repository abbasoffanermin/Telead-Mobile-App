import {
  Image,
  ImageSourcePropType,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {windowWidth} from '../constants/const.styles';
import {MainButton} from './MainButton';
import {SvgImage} from './SvgImage';
import {Typography} from '../constants/typography';
import {colors} from '../constants/colors';
import {normalize} from '../constants/metrics';
import {Rating, AirbnbRating} from 'react-native-ratings';
import StarRating from 'react-native-star-rating-widget';
export interface IModalComp {
  children?: React.ReactNode;
  closeable?: boolean;
  image?: ImageSourcePropType | undefined;
  text?: string;
  header?: string;
  defaultOpen?: boolean;
  rate?: boolean;
  button?: string;
  onPress?: () => void;
  onclose?: () => void;
}
export interface IModalRefCallback {
  close: () => void;
  open: () => void;
  state?: boolean;
}
const ModalComp: React.ForwardRefRenderFunction<
  IModalRefCallback,
  IModalComp
> = (props, ref, ) => {
  const [visiable, setVisiable] = useState<boolean>(!!props.defaultOpen);
  const [rating, setRating] = useState(0);
  useImperativeHandle(ref, () => {
    return {
      close: () => setVisiable(false),
      open: () => setVisiable(true),
      state: visiable,
    };
  });

  const closeModal = () => {
    props?.onclose?.();
    setVisiable(false);
  };
  console.log(props.image);
  return (
    <Modal
      statusBarTranslucent={true}
      onDismiss={closeModal}
      animationType="fade"
      transparent={true}
      visible={visiable}
      // onRequestClose={closeModal}
    >
      <Pressable
        disabled={!props.closeable}
        style={styles.background}
        onPress={() => (ref as {current: IModalRefCallback}).current?.close()}>
        <View style={styles.view}>
          {props.image ? (
            <SvgImage style={styles.image} source={props.image} />
          ) : null}
          {props.header ? (
            <Text style={styles.header}>{props.header}</Text>
          ) : null}
          {props.text ? <Text style={styles.text}>{props.text}</Text> : null}
          {props.rate ? (
            <StarRating
              style={styles.rate}
              rating={rating}
              emptyColor="#A0A4AB"
              onChange={setRating}
              starSize={30}
            />
          ) : null}

          {props.button ? (
            <MainButton
              costumwidth={200}
              title={props.button}
              icon={require('../assets/images/arrow_right.svg')}
              onPress={props.onPress}
            />
          ) : null}
        </View>
      </Pressable>
    </Modal>
  );
};

export default forwardRef(ModalComp);
const styles = StyleSheet.create({
  background: {
    // backgroundColor: '#2B2D4D',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rate: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: normalize('vertical', 30),
    gap: 10,
  },
  view: {
    backgroundColor: '#fff',
    width: windowWidth - 34 * 2,
    padding: 40,
    borderRadius: 40,
  },
  header: {
    ...Typography.largeJostSemiBold2,
    color: colors.secondary.main,
    textAlign: 'center',
  },
  text: {
    ...Typography.smallMulishBold14,
    color: colors.black.main,
    textAlign: 'center',
  },
  image: {
    alignSelf: 'center',
    marginVertical: normalize('vertical', 30),
  },
});
