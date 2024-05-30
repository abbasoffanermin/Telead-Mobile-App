import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Navbar} from '../../components/Navbar';

export const FillProfil = () => {
  return (
    <View>
  
      <Navbar
        lefticonAction="icon-text"
        left={{
          icon: require('../../assets/images/back.svg'),
          text: 'Fill Your Profile',
        }}
        righticonAction="icon"
        right={{
          icon: require('../../assets/images/search.svg'),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
