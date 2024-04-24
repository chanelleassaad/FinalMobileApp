import React, {useState} from 'react';
import {StyleSheet, Text, Pressable, View, Image} from 'react-native';
import InputField from '../molecules/InputField';
import ButtonWithMessage from '../molecules/ButtonWithMessage';

const AuthForm = ({type, onSubmit, onNavigate, errorMessage}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAction = () => {
    onSubmit({email, password});
  };

  const handleNavigate = () => {
    onNavigate();
  };

  const isButtonDisabled = !email || !password || loading;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/027/460/934/original/bookshelf-cloud-clipart-transparent-background-generative-ai-free-png.png',
        }}
      />

      <InputField
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />

      <InputField
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />

      <ButtonWithMessage
        handleOnPress={handleAction}
        isButtonDisabled={isButtonDisabled}
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
    backgroundColor: '#21618C',
  },
  footerText: {
    marginTop: 20,
    textAlign: 'center',
    color: 'white',
  },
  signup: {
    color: '#AED6F1',
    fontSize: 13,
    textDecorationLine: 'underline',
  },
});
