import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';

interface IButtonProps {
  handleOnPress: () => void;
  isButtonDisabled: boolean;
  label: string;
  errorMessage?: string;
}

const ButtonWithMessage = ({
  handleOnPress,
  isButtonDisabled,
  label,
  errorMessage,
}: IButtonProps) => {
  return (
    <>
      <Pressable
        style={[styles.button, isButtonDisabled && styles.disabledButton]}
        onPress={handleOnPress}
        disabled={isButtonDisabled}>
        <Text
          style={[
            styles.buttonText,
            isButtonDisabled && styles.disabledButtonText,
          ]}>
          {label}
        </Text>
      </Pressable>
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
    </>
  );
};

export default ButtonWithMessage;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#21618C',
    height: 50,
    width: '100%',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: '#99A3A4',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  disabledButtonText: {
    color: 'white',
  },
  errorText: {
    color: '#EC7063',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
});
