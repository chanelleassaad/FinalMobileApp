import React, {useState} from 'react';
import AuthForm from '../components/template/AuthForm';
import {IUser, signUpUser} from '../config/UserApi';

const SignupForm = ({navigation}: {navigation: any}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleSignup = async ({email, password}: IUser) => {
    try {
      const user = await signUpUser({email, password});
      setErrorMessage(user.message);
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
