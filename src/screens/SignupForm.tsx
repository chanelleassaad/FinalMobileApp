import React, {useState} from 'react';
import AuthForm from '../components/template/AuthForm';
import {IUser, signUpUser} from '../config/UserApi';
import {useAuth} from '../store/authentication/AuthContext';

const SignupForm = ({navigation}: {navigation: any}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const {signIn} = useAuth();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleSignup = async ({email, password}: IUser) => {
    try {
      const res = await signUpUser({email, password});
      const {accessToken, refreshToken} = res;
      await signIn(email, accessToken, refreshToken);
      setErrorMessage('');
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  return (
    <AuthForm
      type="signup"
      onSubmit={handleSignup}
      onNavigate={handleLoginPress}
      errorMessage={errorMessage}
    />
  );
};

export default SignupForm;
