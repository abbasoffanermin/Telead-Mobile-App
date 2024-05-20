import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const AuthStack = createNativeStackNavigator();
const MainRouter = () => {
  return (
    <AuthStack.Navigator>
      {/* <AuthStack.Screen name="login" component={Login} /> */}
      <AuthStack.Screen name="register" component={Register} />
    </AuthStack.Navigator>
  );
};

export default MainRouter;

const styles = StyleSheet.create({});
