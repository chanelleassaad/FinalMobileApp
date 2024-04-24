import React, {Dispatch, SetStateAction} from 'react';
import {Text, TextInput, StyleSheet, View} from 'react-native';

interface IInputFieldProp {
  label: string;
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
  placeholder: string;
  secureTextEntry?: boolean;
}

const InputField = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}: IInputFieldProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry ? true : false}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    color: 'white',
    fontSize: 17,
    margin: 5,
  },
  input: {
    height: 50,
    width: '100%',
    paddingHorizontal: 20,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
