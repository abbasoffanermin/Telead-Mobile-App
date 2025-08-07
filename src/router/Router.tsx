import React, {useState} from 'react';
import MainRouter from './Main.Router';
import {AuthRouter} from './Auth.Router';
import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from '../contexts/AuthContext';

const Router = () => {
  const {isAuth} = useAuth();

  return (
    <NavigationContainer>
      {isAuth ? <MainRouter /> : <AuthRouter />}
    </NavigationContainer>
  );
};

export default Router;
