import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

const RefreshIndicator = () => {
  return (
    <ActivityIndicator size="large" color="#21618C" style={styles.refresh} />
  );
};

export default RefreshIndicator;

const styles = StyleSheet.create({
  refresh: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
