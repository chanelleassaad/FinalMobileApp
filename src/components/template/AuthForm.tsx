import React from 'react';
import {StyleSheet, Text, Pressable, View, Image} from 'react-native';
import InputField from '../molecules/InputField';
import ButtonWithMessage from '../molecules/ButtonWithMessage';
import {Formik} from 'formik';
import {loginValidationSchema} from '../../validationSchemas/logInValidationSchema';
import {signUpValidationSchema} from '../../validationSchemas/signUpValidationSchema';

interface IProps {
  type: string;
  onSubmit: (data: {email: string; password: string}) => void;
  onNavigate: () => void;
  errorMessage: string;
}

const AuthForm = ({type, onSubmit, onNavigate, errorMessage}: IProps) => {
  const handleNavigate = () => {
    onNavigate();
  };

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={
        type === 'login' ? loginValidationSchema : signUpValidationSchema
      }
      onSubmit={(values, {setSubmitting}) => {
        onSubmit(values);
        setSubmitting(false);
      }}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../../assets/icon.png')}
            resizeMode="contain"
          />

          <InputField
            label="Email Address"
            placeholder="Please enter your Email Address"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"
          />
          {errors.email && touched.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}

          <InputField
            label="Password"
            placeholder="Please enter your Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
          />
          {errors.password && touched.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

          <ButtonWithMessage
            handleOnPress={handleSubmit}
            isButtonDisabled={!values.email || !values.password}
            label={type === 'login' ? 'LOGIN' : 'SIGN UP'}
            errorMessage={errorMessage}
          />

          <Text style={styles.footerText}>
            {type === 'login'
              ? "Don't Have an Account?"
              : 'Already Have an Account?'}
            <Pressable onPress={handleNavigate}>
              <Text style={styles.signup}>
                {type === 'login' ? ' Sign Up' : ' Login'}
              </Text>
            </Pressable>
          </Text>
        </View>
      )}
    </Formik>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 300,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    backgroundColor: '#D0D3D4',
  },
  footerText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#424949',
  },
  signup: {
    color: '#21618C',
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
});
