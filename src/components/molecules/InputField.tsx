import React from 'react';
import {Text, TextInput, StyleSheet, View} from 'react-native';

interface IInputFieldProp {
  label: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  onBlur: (e: any) => void;
  value: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

const InputField = ({
  label,
  placeholder,
  onChangeText,
  onBlur,
  value,
  secureTextEntry = false,
  keyboardType = 'default',
}: IInputFieldProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    width: '100%',
  },
  label: {
    color: '#21618C',
    fontSize: 17,
    margin: 5,
  },
  inputContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  input: {
    height: 50,
    width: '100%',
    paddingHorizontal: 20,
    borderColor: '#21618C',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
