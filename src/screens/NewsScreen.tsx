import React, {useCallback, useEffect, useState} from 'react';
import {Text, ActivityIndicator, FlatList, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from '../config/BackendApi';
import {useAuth} from '../store/authentication/AuthContext';
import NewsPost from '../components/organisms/NewsPost';

const NewsScreen = () => {
  const dispatch = useDispatch();
  const {posts, loading, error} = useSelector((state: any) => state.posts);
  const {userToken, updateAccessToken} = useAuth();
  const [page, setPage] = useState(1);
  const [allPosts, setAllPosts] = useState([]);
  const [loadMore, setLoadingMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchPosts = useCallback(async () => {
    await dispatch(getPosts(userToken, page, updateAccessToken));
    setLoadingMore(false);
  }, [dispatch, page]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    if (posts && posts.results) {
      setAllPosts(prev => {
        return [...prev, ...posts.results];
      });
    }
    setRefreshing(false);
  }, [posts]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await setAllPosts([]);
    setPage(1);
  }, []);

  const onEndReached = () => {
    if (!loadMore && posts.pagination && posts.pagination.hasNextPage) {
      setLoadingMore(true);
      setPage(prevPage => prevPage + 1);
    }
  };

  const renderItem = ({item}) => <NewsPost post={item} />;

  if (loading && allPosts.length === 0) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <FlatList
      data={allPosts}
      renderItem={renderItem}
      keyExtractor={item => item._id.toString()}
      onEndReachedThreshold={0.1}
      onEndReached={onEndReached}
      ListFooterComponent={() => loadMore && <ActivityIndicator />}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default NewsScreen;
