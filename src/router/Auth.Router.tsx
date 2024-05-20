import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import {Welcome} from '../screens/auth/Welcome';
import {RoutesEnum} from './router';
import {LetsYouIn} from '../screens/auth/LetsYouIn';

const Stack = createNativeStackNavigator();
export const AuthRouter = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={RoutesEnum.welcome} component={Welcome} />
      <Stack.Screen name={RoutesEnum.letsyouin} component={LetsYouIn} />
      <Stack.Screen name={RoutesEnum.login} component={Login} />
      <Stack.Screen name={RoutesEnum.register} component={Register} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
