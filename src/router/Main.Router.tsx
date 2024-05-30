import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.types';
import {RoutesEnum} from './Router';
import Test from '../screens/auth/Test';
const AuthStack = createNativeStackNavigator<NavigationParamList>();
const MainRouter = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={RoutesEnum.test} component={Test} />
      {/* <AuthStack.Screen name="login" component={Login} /> */}
      {/* <AuthStack.Screen name="register" component={Register} /> */}
    </AuthStack.Navigator>
  );
};

export default MainRouter;

const styles = StyleSheet.create({});
