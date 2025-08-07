import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import {Welcome} from '../screens/auth/Welcome';
import {RoutesEnum} from './router';
import {LetsYouIn} from '../screens/auth/LetsYouIn';
import {FillProfil} from '../screens/auth/FillProfil';
import {NavigationParamList} from '../types/navigation.types';
import {Verification} from '../screens/auth/Verification';
import Test from '../screens/main/Test';
import {ModalScreen} from '../screens/ModalScreen';
import {defaultOptions, modalScreenOptions} from '../types/navigation.config';
import {PaymentMethods} from '../screens/payments/PaymentMethods';
import {PaymentScreensTab} from '../screens/payments';

const Stack = createNativeStackNavigator<NavigationParamList>();
export const AuthRouter = ({setIsAuth}) => {
  return (
    <Stack.Navigator
      screenOptions={defaultOptions}
      // initialRouteName={RoutesEnum.verification}
    >
      <Stack.Screen
        name={RoutesEnum.welcome}
        component={Welcome}
        setIsAuth={setIsAuth}
      />
      <Stack.Screen
        name={RoutesEnum.letsyouin}
        component={LetsYouIn}
        setIsAuth={setIsAuth}
      />
      <Stack.Screen
        name={RoutesEnum.login}
        component={Login}
        setIsAuth={setIsAuth}
      />
      <Stack.Screen
        name={RoutesEnum.test}
        component={Test}
        setIsAuth={setIsAuth}
      />
      <Stack.Screen
        name={RoutesEnum.modalScreen}
        component={ModalScreen}
        options={modalScreenOptions}
        setIsAuth={setIsAuth}
      />
      <Stack.Screen
        name={RoutesEnum.register}
        component={Register}
        setIsAuth={setIsAuth}
      />
      <Stack.Screen
        name={RoutesEnum.verification}
        component={Verification}
        setIsAuth={setIsAuth}
      />
      <Stack.Screen
        name={RoutesEnum.fillprofil}
        component={FillProfil}
        setIsAuth={setIsAuth}
      />
      <Stack.Screen
        name={RoutesEnum.paymentScreensTab}
        component={PaymentScreensTab}
        setIsAuth={setIsAuth}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
