// AppNavigator.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Login from '@/components/Login/Login';
import Dashboard from '@/components/Screens/Dashboard';
import { ThemeProvider } from '@/components/ThemeContext';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard">
          <Stack.Screen name="Login" component={Login}   options={{ headerShown: false }}/>
          <Stack.Screen name="Dashboard" component={Dashboard}   options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default AppNavigator;
