import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Platform, Animated} from 'react-native';
import NewsPostGradient from '../molecules/NewsPostGradient';
import NewsImage from '../molecules/NewsImage';
import PostModal from '../template/PostModal';
import {IResult} from '../../interfaces/RootInterface';

const NewsPost = ({post}: {post: IResult}) => {
  const [animation] = useState(new Animated.Value(1));
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handlePressIn = () => {
    Animated.spring(animation, {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
    setIsModalVisible(true);
  };

  return (
    <>
      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}>
        <Animated.View
          style={[styles.container, {transform: [{scale: animation}]}]}>
          <NewsImage post={post} />
          <NewsPostGradient post={post} />
        </Animated.View>
      </TouchableOpacity>
      <PostModal
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        post={post}
      />
    </>
  );
};

export default NewsPost;

const boxShadow = Platform.select({
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
