import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../../types/navigation.types';
import {RoutesEnum} from '../../router/router';
import {Navbar} from '../../components/Navbar';
import {MainButton} from '../../components/MainButton';

export const PaymentMethods: React.FC<
  NativeStackScreenProps<NavigationParamList, RoutesEnum.paymentMethod>
> = ({navigation}) => {
  return (
    <View>
      <Navbar
        lefticonAction="icon-text"
        left={{
          icon: require('../../assets/images/back.svg'),
          text: 'Payment Option',
          onPress: () => navigation.goBack(),
        }}
      />
      <MainButton
        costumwidth={350}
        icon={require('../../assets/images/arrow_right.svg')}
        title="Add New Card"
      />
    </View>
  );
};

const styles = StyleSheet.create({});
