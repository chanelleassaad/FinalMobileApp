import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderRight = ({onPress}) => {
  return (
    <View style={{marginRight: 10}}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="person" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRight;
