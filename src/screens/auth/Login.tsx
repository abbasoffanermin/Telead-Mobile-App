import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MainLogo from '../../assets/images/mainLogo.svg';
import {Typography} from '../../constants/typography';
import {colors} from '../../constants/colors';
import {normalize} from '../../constants/metrics';
import {MainInput} from '../../components/MainInput';
import {MainButton} from '../../components/MainButton';
import {SvgImage} from '../../components/SvgImage';
import {TextLink} from '../../components/TextLink';
import {RoutesEnum} from '../../router/router';
const Register: React.FC = ({navigation}) => {
  const [confirm, reject] = useState<boolean>(false);
  return (
    <View style={styles.root}>
      <MainLogo style={styles.mainLogo} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Let’s Sign In.!</Text>
          <Text style={styles.text}>
            Login to Your Account to Continue your Courses
          </Text>
          <View style={styles.inputs}>
            <MainInput
              type="email-address"
              placeholder="Email"
              icon={require('../../assets/images/email.svg')}
            />
            <MainInput
              type="visible-password"
              placeholder="Password"
              icon={require('../../assets/images/Lock.svg')}
            />
            <View
              style={[
                styles.termsContainer,
                {flexDirection: 'row', justifyContent: 'space-between'},
              ]}>
              <View style={styles.termsContainer}>
                <Pressable
                  onPress={() => reject(!confirm)}
                  hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
                  <SvgImage
                    source={
                      confirm
                        ? require('../../assets/images/rememberTrue.svg')
                        : require('../../assets/images/rememberFalse.svg')
                    }
                  />
                </Pressable>
                <Pressable>
                  <Text style={styles.terms}> Remember Me</Text>
                </Pressable>
              </View>
              <Pressable>
                <Text style={styles.forgot}>Forgot Password?</Text>
              </Pressable>
            </View>
          </View>
          <MainButton
            style={styles.signUpButton}
            costumwidth={350}
            icon={require('../../assets/images/arrow_right.svg')}
            title="Sign in"
            onPress={() => {}}
          />
          <Text style={styles.orText}>Or Continue With</Text>
          <View style={styles.socials}>
            <SvgImage
              source={require('../../assets/images/google.svg')}
              width={68}
              height={68}
            />
            <SvgImage
              source={require('../../assets/images/apple.svg')}
              width={68}
              height={68}
              style={{marginBottom: 26}}
            />
          </View>
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
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#F5F9FF',
    flex: 1,
  },
  mainLogo: {
    alignSelf: 'center',
    marginTop: 100,
  },
  orText: {
    ...Typography.smallMulishExtraBold,
    color: colors.black.main,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: normalize('vertical', 25),
  },
  title: {
    ...Typography.largeJostSemiBold2,
    color: colors.secondary.main,
  },
  text: {
    ...Typography.smallMulishBold14,
    color: colors.black.main,
  },
  header: {
    paddingVertical: normalize('vertical', 60),
  },
  container: {
    paddingHorizontal: normalize('horizontal', 37),
  },
  inputs: {
    marginTop: 50,
    gap: 20,
  },
  signUpButton: {
    marginVertical: normalize('vertical', 39),
    marginHorizontal: normalize('horizontal', 39),
    paddingLeft: '40%',
    paddingRight: '2%',
    ...Typography.mediumJostSemibold,
  },
  socials: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    alignSelf: 'center',
  },
  linkedText: {
    marginTop: 60,
    alignSelf: 'center',
  },
  terms: {
    ...Typography.smallMulishBold14,
    color: colors.black.main,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  forgot: {
    ...Typography.smallMulishBold14,
    color: colors.black.main,
  },
});
