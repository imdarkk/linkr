import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import { RootStackParamList } from '../types';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Profile from '../components/Profile';
import LinkingConfiguration from './LinkingConfiguration';
import { useAuth } from '../auth/auth-context';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const { loggedIn } = useAuth();

  return (
    <NavigationContainer
      linking={LinkingConfiguration}>
      {loggedIn ? (
        <AuthNavigator />
      ) : (
        <RootNavigator />
      )}
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  );
}

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  )
}
