/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import {FlatList, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import {OnBoarding} from './src/mocks/data';
import {Button} from './src/components/Button';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Router from './src/router/Router';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Register from './src/screens/auth/Register';
import Login from './src/screens/auth/Login';
import {AuthProvider} from './src/contexts/AuthContext';

const Stack = createNativeStackNavigator();
console.warn = (message: string) => {
  if (
    message.includes(
      'Non-serializable values were found in the navigation state',
    )
  ) {
    return;
  }
};
function App(): React.JSX.Element {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" translucent backgroundColor="white" />
<AuthProvider>
<Router />
</AuthProvider>
    
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
