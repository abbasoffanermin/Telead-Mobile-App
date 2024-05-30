import {Alert, Keyboard, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import {OtpCodeField} from '../../components/OtpCodeField';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../../types/navigation.types';
import {RoutesEnum} from '../../router/router';
import {normalize} from '../../constants/metrics';
import {colors} from '../../constants/colors';
import {Navbar} from '../../components/Navbar';
import ModalComp, {IModalRefCallback} from '../../components/ModalComp';
import {Typography} from '../../constants/typography';
import {MainButton} from '../../components/MainButton';
import {ModalScreen} from '../ModalScreen';
import {TextLink} from '../../components/TextLink';

export const Verification: React.FC<
  NativeStackScreenProps<NavigationParamList, RoutesEnum.verification>
> = ({navigation, route}) => {
  const [code, setCode] = React.useState<string>('');
  const modalRef = useRef<IModalRefCallback>(null);
  console.log(route.params);
  return (
    <View style={styles.container}>
      <Navbar
        lefticonAction="icon-text"
        left={{
          icon: require('../../assets/images/back.svg'),
          text: 'Back ',
          onPress: () => navigation.goBack(),
        }}
      />
      <Pressable onPress={() => modalRef.current?.open()}>
        <Text style={styles.otpText}> Code has been Send to your phone</Text>
      </Pressable>
      <OtpCodeField
        setCode={setCode}
        code={code}
        style={styles.otp}
        triggerOnFinish={Keyboard.dismiss}
        length={4}
      />
      <TextLink
        style={styles.resendText}
        content="Resend code in 59s"
        highlighted={[{text: '59', callback: () => {}}]}
      />
      <MainButton
        costumwidth={200}
        title="Verify"
        // onPress={() =>
        //   navigation.navigate(RoutesEnum.modalScreen, {
        //     text: 'Complete your Course. Please Write a Review',
        //     image: require('../../assets/images/complete.svg'),
        //     header: 'Course Completed',
        //     rate: true,
        //     button: 'Write a Review',

        //     closeable: true,
        //     defaultOpen: true,
        //   })
        // }
        onPress={() => navigation.navigate(RoutesEnum.paymentMethod)}
      />
      {/* <ModalComp
        closeable={true}
        onclose={() => {
          Alert.alert('close');
        }}
        header="Course Completed"
        ref={modalRef}
        rate={true}
        button="Write a Review"
        text="Complete your Course. Please Write a Review"
        image={require('../../assets/images/complete.svg')}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  otp: {
    paddingHorizontal: normalize('horizontal', 34),
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary.bg,
  },
  otpText: {
    ...Typography.smallMulishBold14,
    color: colors.secondary.main,
    textAlign: 'center',

    marginTop: normalize('vertical', 120),
    marginBottom: normalize('vertical', 40),
  },
  resendText: {
    ...Typography.smallMulishBold14,
    color: colors.secondary.main,
    textAlign: 'center',
    marginVertical: normalize('vertical', 50),
  },
});
