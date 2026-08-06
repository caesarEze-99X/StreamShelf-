import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CommonInfo from 'features/commonInfo/screens/CommonInf';
import Home from 'features/home/screens/Home';
import MyList from 'features/myList/screens/MyList';
import { ROUTE_NAME } from 'navigation/constants/constant';
import { RootStackParamList } from 'navigation/types';

const MainStack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <MainStack.Navigator
      initialRouteName={ROUTE_NAME.Home}
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <MainStack.Screen name={ROUTE_NAME.Home} component={Home} />
      <MainStack.Screen name={ROUTE_NAME.CommonInfo} component={CommonInfo} />
      <MainStack.Screen name={ROUTE_NAME.MyList} component={MyList} />
    </MainStack.Navigator>
  );
}
