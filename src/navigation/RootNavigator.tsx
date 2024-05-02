import React from 'react';
import UnauthNav from './UnauthNav';
import AuthNav from './AuthNav';
import {useSelector} from 'react-redux';

const RootNavigator = () => {
  const {userToken} = useSelector((state: any) => state.auth);
  const isUserAuth = !!userToken;

  return isUserAuth ? <AuthNav /> : <UnauthNav />;
};

export default RootNavigator;
