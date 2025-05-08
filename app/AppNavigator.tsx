// AppNavigator.tsx
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Login from '@/components/Login/Login';
import HomeScreen from '@/components/Screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
