import React from 'react';
import NewsScreen from '../screens/NewsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

const AuthNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="News" component={NewsScreen} />
    </Tab.Navigator>
  );
};

export default AuthNav;
