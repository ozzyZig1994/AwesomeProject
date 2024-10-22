import { createStackNavigator } from '@react-navigation/stack';
import { GithubUsersScreen } from '../../presentation/screens/GithubUsersScreen/GithubUsersScreen';
import { GithubReposScreen } from '../../presentation/screens/GithubReposScreen/GithubReposScreen';
import { View } from 'react-native';


export type RootStackParams = {
  GithubReposScreen: { login: string, avatar: string };
  GithubUsersScreen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="GithubUsersScreen" component={GithubUsersScreen} />
      <Stack.Screen name="GithubReposScreen" component={GithubReposScreen} />
    </Stack.Navigator>
  );
}