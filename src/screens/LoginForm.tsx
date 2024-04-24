import React, {useState} from 'react';
import AuthForm from '../components/template/AuthForm';
import {IUser, loginUser} from '../config/BackendApi';
import {useAuth} from '../store/authentication/AuthContext';

const LoginForm = ({navigation}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const {signIn} = useAuth();

  const handleSignUpPress = () => {
    navigation.navigate('Signup');
  };

  const handleLogin = async ({email, password}: IUser) => {
    try {
      const res = await loginUser({email, password});
      const {accessToken, refreshToken} = res;
      await signIn(email, accessToken, refreshToken);
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
