import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useUserStore} from '../../store/user/userStore';


const Test = () => {
  const {userData} = useUserStore();
  console.log(userData);
  
  return (
    <View>
      <Text>Test</Text>
      <Text>Test</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
