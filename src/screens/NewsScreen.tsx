import React, {useEffect} from 'react';
import {Text, ActivityIndicator, FlatList, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from '../config/BackendApi';
import {useAuth} from '../store/authentication/AuthContext';

const NewsScreen = () => {
  const dispatch = useDispatch();
  const {posts, loading, error} = useSelector((state: any) => state.posts);
  const {userToken, updateAccessToken} = useAuth();

  useEffect(() => {
    dispatch(getPosts(userToken, updateAccessToken));
  }, [dispatch, userToken]);

  const renderItem = ({item}) => (
    <Image height={50} width={50} source={{uri: item.image_url}} />
  );

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <FlatList
          data={posts.results}
          renderItem={renderItem}
          keyExtractor={item => item._id.toString()}
        />
      )}
    </>
  );
};

export default NewsScreen;
