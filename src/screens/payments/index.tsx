import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TabView, SceneMap} from 'react-native-tab-view';
import {PaymentMethods} from './PaymentMethods';
import {CardScreen} from './CardScreen';
import {windowWidth} from '../../constants/const.styles';
const renderScene = SceneMap({
  first: PaymentMethods,
  second: CardScreen,
});
export const PaymentScreensTab = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: windowWidth}}
    />
  );
};

const styles = StyleSheet.create({});
