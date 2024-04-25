import React from 'react';
import {StyleSheet, TouchableOpacity, Platform} from 'react-native';
import NewsPostGradient from '../molecules/NewsPostGradient';
import NewsImage from '../molecules/NewsImage';

const NewsPost = ({post}) => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.container}>
      <NewsImage post={post} />
      <NewsPostGradient post={post} />
    </TouchableOpacity>
  );
};

export default NewsPost;

const boxShadow: any = Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  android: {elevation: 6},
});

const styles = StyleSheet.create({
  container: {
    height: 240,
    margin: 10,
    backgroundColor: '#eee',
    borderRadius: 24,
    marginHorizontal: 16,
    ...boxShadow,
  },
});
