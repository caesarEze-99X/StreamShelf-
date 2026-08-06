import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from 'navigation/RootNavigator';

import 'tailwind/global.css';

const App = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default App;
