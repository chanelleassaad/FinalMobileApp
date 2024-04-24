import React from 'react';
import UnauthNav from './UnauthNav';
import {useAuth} from '../store/authentication/AuthContext';
import AuthNav from './AuthNav';

const RootNavigator = () => {
  const {userToken} = useAuth();
  const isUserAuth = !!userToken;

  return isUserAuth ? <AuthNav /> : <UnauthNav />;
};

export default RootNavigator;
