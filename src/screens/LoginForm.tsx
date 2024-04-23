import React, {useState} from 'react';
import AuthForm from '../components/template/AuthForm';
import {IUser, loginUser} from '../config/BackendApi';

const LoginForm = ({navigation}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUpPress = () => {
    navigation.navigate('Signup');
  };

  const handleLogin = async ({email, password}: IUser) => {
    try {
      await loginUser({email, password});
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <AuthForm
      type="login"
      onSubmit={handleLogin}
      onNavigate={handleSignUpPress}
      errorMessage={errorMessage}
    />
  );
};

export default LoginForm;
