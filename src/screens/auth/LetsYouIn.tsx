import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SignUp1 from '../../assets/images/sign-up1.svg';
import Google from '../../assets/images/google.svg';
import Apple from '../../assets/images/apple.svg';
import {Typography} from '../../constants/typography';
import {colors} from '../../constants/colors';
import {normalize} from '../../constants/metrics';
import {CommonStyles} from '../../constants/common.styles';
import {MainButton} from '../../components/MainButton';
import {TextLink} from '../../components/TextLink';
import {RoutesEnum} from '../../router/router';
export const LetsYouIn = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <SignUp1 width={360} height={333} />
        <Text style={styles.text}>Let’s you in</Text>
      </View>
      <View style={[CommonStyles.flexAlignRow, {gap: 12, alignSelf: 'center'}]}>
        <Google />
        <Text
          style={{
            ...Typography.smallMulishExtraBold,
            color: colors.secondary.main,
            marginBottom: 15,
          }}>
          Continue with Google
        </Text>
      </View>
      <View style={[CommonStyles.flexAlignRow, {gap: 12, alignSelf: 'center'}]}>
        <Apple />
        <Text
          style={{
            ...Typography.smallMulishExtraBold,
            color: colors.secondary.main,
          }}>
          Continue with Google
        </Text>
      </View>
      <Text style={styles.orText}>( Or )</Text>
      <MainButton
        title="Sign In with Your Account"
        costumwidth={350}
        icon={require('../../assets/images/arrow_right.svg')}
        style={{marginTop: 30}}
        onPress={() => navigation.navigate(RoutesEnum.login)}
      />
      <TextLink
        content="Don’t have an Account? SIGN UP"
        highlighted={[
          {
            text: 'SIGN UP',
            callback: () => {
              navigation.navigate(RoutesEnum.register);
            },
          },
        ]}
        style={styles.linkedText}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize('horizontal', 37),
    paddingVertical: normalize('vertical', 40),
  },
  text: {
    ...Typography.largeJostSemiBold2,
    color: colors.secondary.main,
    paddingHorizontal: normalize(
      'horizontal',
      153 - normalize('horizontal', 37),
    ),
    paddingVertical: normalize('vertical', 31),
  },
  linkedText: {
    marginTop: 120,
    alignSelf: 'center',
  },
  orText: {
    ...Typography.smallMulishExtraBold,
    color: colors.black.main,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 59,
  },
});
