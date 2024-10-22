import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/infrastructure/navigator/StackNavigator';

export const App = () => {
  return(
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}