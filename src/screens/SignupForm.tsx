import React, {useState} from 'react';
import AuthForm from '../components/template/AuthForm';
import {IUser, signUpUser} from '../config/BackendApi';

const SignupForm = ({navigation}) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleSignup = async ({email, password}: IUser) => {
    console.log(email);
    try {
      const user = await signUpUser({email, password});
      setErrorMessage(user.message);
    } catch (error) {
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
