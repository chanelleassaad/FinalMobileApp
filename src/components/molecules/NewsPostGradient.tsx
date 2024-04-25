import moment from 'moment';
import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const NewsPostGradient = ({post}) => {
  return (
    <LinearGradient
      colors={['#0000', '#000A', '#000']}
      style={styles.titleContainer}>
      <Image
        style={styles.imageIcon}
        source={{uri: post.source_icon}}
        resizeMode="contain"
      />

      <Text style={styles.text}>{post?.title}</Text>
      <Text style={styles.timestamp}>
        {moment(post?.pubDate).format('HH:MM DD, MMMM')}
      </Text>
    </LinearGradient>
  );
};

export default NewsPostGradient;

const styles = StyleSheet.create({
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    height: 160,
    paddingLeft: 16,
    paddingRight: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    color: '#fff',
    paddingBottom: 24,
  },
  timestamp: {
    position: 'absolute',
    color: '#eee',
    fontSize: 12,
    fontWeight: '300',
    right: 16,
    bottom: 8,
  },
  imageIcon: {
    position: 'absolute',
    top: 0,
    right: 10,
    width: 50,
    height: 50,
  },
});
