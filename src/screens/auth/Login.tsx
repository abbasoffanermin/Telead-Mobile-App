import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../components/Button';
import {MainButton} from '../../components/MainButton';
import {ArrowRight} from '../../assets/images/arrow_right.svg';
import {SvgImage} from '../../components/SvgImage';
import {colors} from '../../constants/colors';
import {Circle, Svg} from 'react-native-svg';
const Login = () => {
  return (
    <View>
      <MainButton
        title="Sign In with Your Account"
        costumwidth={350}
        icon={require('../../assets/images/arrow_right.svg')}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
