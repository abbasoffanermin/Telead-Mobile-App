import {StyleSheet, Text, View, FlatList, Image, Pressable} from 'react-native';
import React from 'react';
import {OnBoarding} from '../../mocks/data';
import {windowWidth} from '../../constants/const.styles';
import {colors} from '../../constants/colors';
import {RoutesEnum} from '../../router/router';
import {Pagination} from '../../components/Pagination';
import {MainButton} from '../../components/MainButton';
import {CommonStyles} from '../../constants/common.styles';
// import {Pagination} from '../../components/Pagination';

export const Welcome: React.FC<{navigation: any}> = ({navigation}) => {
  const navigateToLogin = () => {
    navigation.navigate(RoutesEnum.letsyouin);
  };
  const listRef = React.useRef<FlatList>(null);
  const onPress = (index: number) => {
    if (index === 2) {
      navigateToLogin();
      return;
    }
    listRef.current?.scrollToIndex({index: index + 1, animated: true});
  };
  const renderItem = ({item, index}) => (
    <View style={styles.background}>
      <Pressable style={styles.skip} onPress={navigateToLogin}>
        <Text onPress={navigateToLogin} style={styles.skipText}>
          Skip
        </Text>
      </Pressable>
      <Image key={item.id} style={styles.image} src={item.url} />
      <View style={styles.texts}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>
      <View style={[CommonStyles.flexAlignRow, {gap: 229, marginTop: 181}]}>
        <Pagination selectedIndex={index + 1} />
        <MainButton
          icon={require('../../assets/images/arrow_right.svg')}
          costumwidth={60}
          onPress={() => onPress(index)}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.root}>
      <FlatList
        ref={listRef}
        data={OnBoarding}
        horizontal
        pagingEnabled
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  background: {
    width: windowWidth,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 57,
    // paddingBottom: bottomSize,
    // paddingHorizontal: horizontalSize,
    // gap: horizontalSize,
  },
  image: {
    width: 300,
    height: 300,
  },
  skip: {
    position: 'absolute',
    top: 20,
    right: 20,
    fontSize: 18,
    fontWeight: '700',
  },
  skipText: {
    color: colors.secondary.main,
    fontSize: 16,
  },
  title: {
    fontSize: 16,
    color: colors.secondary.main,
  },
  desc: {
    textAlign: 'center',
    paddingHorizontal: 30,
    fontSize: 14,
    color: colors.black.main,
  },
  texts: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

    gap: 8,
  },
  button: {
    flex: 0.2,
    marginTop: 20,
    marginBottom: 20,
  },
});
