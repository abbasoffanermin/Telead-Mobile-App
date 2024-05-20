import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainLogo from '../../assets/images/mainLogo.svg';
import {Typography} from '../../constants/typography';
import {colors} from '../../constants/colors';
import {normalize} from '../../constants/metrics';
import {CommonStyles} from '../../constants/common.styles';
import {MainInput} from '../../components/MainInput';

const Register = () => {
  return (
    <View style={styles.root}>
      <MainLogo style={styles.mainLogo} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Getting Started.!</Text>
          <Text style={styles.text}>
            Create an Account to Continue your allCourses
          </Text>
          <View style={styles.inputs}>
            <MainInput
              type="email-address"
              placeholder="Email"
              icon={require('../../assets/images/email.svg')}
              // securitytype={false}
            />
            <MainInput
              type="visible-password"
              placeholder="Password"
              icon={require('../../assets/images/Lock.svg')}
              // securitytype={true}
            />
          </View>
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
});
