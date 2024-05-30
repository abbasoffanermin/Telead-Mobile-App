import {NativeStackNavigationOptions} from 'react-native-screens/lib/typescript/native-stack/types';

export const defaultOptions: NativeStackNavigationOptions = {
  headerShown: false,
  screenOrientation: 'portrait',

  stackAnimation: 'ios',
  contentStyle: {
    backgroundColor: 'white',
  },

};
export const modalScreenOptions: NativeStackNavigationOptions = {
  ...defaultOptions,
  presentation: 'transparentModal',
  animation: 'fade',
  contentStyle: {
    backgroundColor: 'transparent',
  }
  
};
