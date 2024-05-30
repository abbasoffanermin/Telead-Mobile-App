import {Platform} from 'react-native';

export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';
export const platformString = String(Platform.OS);

// On android keyboardWill events are not available
export const keyboardShowEvent = isIos ? 'keyboardWillShow' : 'keyboardDidShow';
export const keyboardHideEvent = isIos ? 'keyboardWillHide' : 'keyboardDidHide';