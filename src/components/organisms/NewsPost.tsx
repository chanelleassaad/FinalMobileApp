import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const NewsPost = ({item}) => {
  return (
    <View style={styles.container}>
      <Image height={60} width={60} source={{uri: item.image_url}} />
    </View>
  );
};

export default NewsPost;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
