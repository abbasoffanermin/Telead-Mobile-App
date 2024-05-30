import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RoutesEnum } from '../router/Router';
import { IModalComp } from '../components/ModalComp';
// import {IModal} from 'components/Modal';

export type AppNavigation = NativeStackNavigationProp<NavigationParamList>;

export type NavigationParamList = {
  [RoutesEnum.authRouter]: {
    isAuth: boolean;
  };
  [RoutesEnum.mainRouter]: undefined;
  [RoutesEnum.welcome]: undefined;
  [RoutesEnum.login]: undefined;
  [RoutesEnum.register]: undefined;
  [RoutesEnum.modalScreen]: IModalComp;
  [RoutesEnum.verification]: {
    fullname?: string;
    email?: string;
    password?: string;
    verificationType: 'login' | 'register';
  };
  [RoutesEnum.paymentMethod]: undefined;
//   [Routes.newCard]: undefined;
//   [Routes.cards]: undefined;
//   [Routes.paymentScreensTab]: undefined;
//   [Routes.modalScreen]: IModal;
  [RoutesEnum.test]: undefined;
  [RoutesEnum.letsyouin]: undefined;
  [RoutesEnum.fillprofil]: undefined;
};