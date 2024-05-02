import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IProps {
  onPress: (event: GestureResponderEvent) => void;
}

const HeaderRight = ({onPress}: IProps) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons
          name="person"
          size={24}
          color="white"
          selectionColor={'#bfcdea'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  header: {
    marginRight: 10,
  },
});
