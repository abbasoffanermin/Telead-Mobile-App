import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MainLogo from '../../assets/images/mainLogo.svg';
import {Typography} from '../../constants/typography';
import {colors} from '../../constants/colors';
import {normalize} from '../../constants/metrics';
import {MainInput} from '../../components/MainInput';
import {MainButton} from '../../components/MainButton';
import {SvgImage} from '../../components/SvgImage';
import {TextLink} from '../../components/TextLink';
import {RoutesEnum} from '../../router/router';
import {Controller, useForm} from 'react-hook-form';
import {Regexs} from '../../constants/regexs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../../types/navigation.types';
import {useUserStore} from '../../store/user/userStore';

export interface IRegisterForm {
  email: string;
  password: string;
  verificationType?: 'register' | 'login';
}

const Register: React.FC<
  NativeStackScreenProps<NavigationParamList, RoutesEnum.register>
> = ({navigation}) => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const {setUser} = useUserStore();

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<IRegisterForm>({
    defaultValues: {
      email: __DEV__ ? 'narmin.abbasova@gmail.com' : '',
      password: __DEV__ ? 'Narmin123!' : '',
    },
  });

  const onSubmit = (data: IRegisterForm) => {
    // İstifadəçi məlumatlarını store-a yazırıq
    setUser({
      email: data.email,
      password: data.password,
      firstName: '',
      lastName: '',
    });

    navigation.navigate(RoutesEnum.fillprofil, {
      ...data,
      verificationType: 'register',
    });
  };

  return (
    <ScrollView style={styles.root}>
      <MainLogo style={styles.mainLogo} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Getting Started!</Text>
          <Text style={styles.text}>
            Create an Account to Continue your all Courses
          </Text>
          <View style={styles.inputs}>
            <Controller
              control={control}
              rules={{
                required: {
                  message: 'Email is required',
                  value: true,
                },
                pattern: {
                  value: Regexs.email,
                  message: 'Email is not valid',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <MainInput
                  type="email-address"
                  placeholder="Email"
                  icon={require('../../assets/images/email.svg')}
                  setValue={onChange}
                  errorMessage={errors.email?.message}
                  onBlur={onBlur}
                  value={value}
                />
              )}
              name="email"
            />

            <Controller
              control={control}
              rules={{
                required: {
                  message: 'Password is required',
                  value: true,
                },
                pattern: {
                  value: Regexs.password,
                  message:
                    'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character',
                },
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <MainInput
                  type="visible-password"
                  placeholder="Password"
                  icon={require('../../assets/images/Lock.svg')}
                  errorMessage={errors.password?.message}
                  setValue={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
              name="password"
            />

            <View style={styles.termsContainer}>
              <Pressable
                onPress={() => setConfirm(!confirm)}
                hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
                <SvgImage
                  source={
                    confirm
                      ? require('../../assets/images/termConfirm.svg')
                      : require('../../assets/images/termReject.svg')
                  }
                />
              </Pressable>
              <Pressable>
                <Text style={styles.terms}> Agree to Terms & Conditions</Text>
              </Pressable>
            </View>
          </View>
          <MainButton
            style={styles.signInButton}
            costumwidth={350}
            icon={require('../../assets/images/arrow_right.svg')}
            title="Sign up"
            disabled={!isValid || !confirm}
            onPress={handleSubmit(onSubmit)}
          />
          <Text style={styles.orText}>Or Continue With</Text>
          <View style={styles.socials}>
            <SvgImage
              source={require('../../assets/images/google.svg')}
              width={68}
              height={68}
            />
            <SvgImage
              source={require('../../assets/images/apple.svg')}
              width={68}
              height={68}
              style={{marginBottom: 26}}
            />
          </View>
          <TextLink
            content="Already have an Account? SIGN IN"
            highlighted={[
              {
                text: 'SIGN IN',
                callback: () => {
                  navigation.navigate(RoutesEnum.login);
                },
              },
            ]}
            style={styles.linkedText}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#F5F9FF',
    flex: 1,
  },
  mainLogo: {
    alignSelf: 'center',
    marginTop: 100,
  },
  orText: {
    ...Typography.smallMulishExtraBold,
    color: colors.black.main,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: normalize('vertical', 25),
  },
  title: {
    ...Typography.largeJostSemiBold2,
    color: colors.secondary.main,
  },
  text: {
    ...Typography.smallMulishBold14,
    color: colors.black.main,
  },
  header: {
    paddingVertical: normalize('vertical', 60),
  },
  container: {
    paddingHorizontal: normalize('horizontal', 37),
  },
  inputs: {
    marginTop: 50,
    gap: 20,
  },
  signInButton: {
    marginVertical: normalize('vertical', 39),
    marginHorizontal: normalize('horizontal', 39),
    paddingLeft: '40%',
    paddingRight: '2%',
    ...Typography.mediumJostSemibold,
  },
  socials: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    alignSelf: 'center',
  },
  linkedText: {
    marginTop: 60,
    alignSelf: 'center',
  },
  terms: {
    ...Typography.smallMulishBold14,
    color: colors.black.main,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
});
