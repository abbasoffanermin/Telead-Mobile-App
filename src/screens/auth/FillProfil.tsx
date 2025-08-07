import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Navbar} from '../../components/Navbar';
import {Typography} from '../../constants/typography';
import {SvgImage} from '../../components/SvgImage';

export const FillProfil = ({navigation}) => {
  return (
    <View>
      <View style={styles.navStyle}>
        <Navbar
          lefticonAction="icon-text"
          left={{
            icon: require('../../assets/images/back.svg'),
            text: 'Fill Your Profile',
            onPress: () => {
              navigation.goBack();
            },
          }}
        />
      </View>
      <View style={styles.avatar}>
        <SvgImage
          source={require('../../assets/images/avatar.svg')}
          onPress={() => {
            console.log('Avatar');
          }}
          width={100}
          height={100}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navStyle: {
    backgroundColor: '#fff',
    marginTop: 25,
  },
  avatar: {
    alignItems: 'center',
    marginTop: 42,
  },
});
