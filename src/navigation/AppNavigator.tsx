import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AmplificationContentScreen from '../screens/AmplificationContentScreen';
import AmplificationReportScreen from '../screens/AmplificationReportScreen';

export type RootStackParamList = {
  Landing: undefined;
  Login: undefined;
  Dashboard: undefined;
  Profile: undefined;
  Amplification: undefined;
  Report: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Amplification" component={AmplificationContentScreen} />
        <Stack.Screen name="Report" component={AmplificationReportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
