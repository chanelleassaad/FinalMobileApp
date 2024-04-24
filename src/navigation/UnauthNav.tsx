import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginForm from '../screens/LoginForm';
import SignupForm from '../screens/SignupForm';

const UnauthenticatedNavigator = createNativeStackNavigator();

const UnauthNav = () => {
  return (
    <UnauthenticatedNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <UnauthenticatedNavigator.Screen name="Login" component={LoginForm} />
      <UnauthenticatedNavigator.Screen name="Signup" component={SignupForm} />
    </UnauthenticatedNavigator.Navigator>
  );
};

export default UnauthNav;
