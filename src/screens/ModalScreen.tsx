import {StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import ModalComp, {IModalRefCallback} from '../components/ModalComp';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.types';
import {RoutesEnum} from '../router/router';

export const ModalScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, RoutesEnum.modalScreen>
> = ({navigation, route}) => {
  const modalRef = useRef<IModalRefCallback>(null);
  const params = route.params;
  
  return (
    <ModalComp
      defaultOpen={true}
      onclose={() => navigation.goBack()}
      ref={modalRef}
      {...params}
    />
  );
};

