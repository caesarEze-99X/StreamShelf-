import { RouteProp } from '@react-navigation/native';
import { ROUTE_NAME } from 'navigation/constants/constant';

export type RouteName = 'Home' | 'CommonInfo' | 'MyList';

export type RootStackParamList = {
  [ROUTE_NAME.Home]: undefined;
  [ROUTE_NAME.CommonInfo]: CommonInfoParams;
  [ROUTE_NAME.MyList]: undefined;
};

export type CommonInfoParams = {
  bannerImg: string;
  description: string;
  title: string;
  backdrop_path?: string;
};

export type CommonInfoRouteProp = RouteProp<
  { [ROUTE_NAME.CommonInfo]: CommonInfoParams },
  'CommonInfo'
>;
