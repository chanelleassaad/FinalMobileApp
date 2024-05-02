import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import RefreshIndicator from '../atoms/RefreshIndicator';
import {IResult} from '../../interfaces/RootInterface';

const NewsImage = ({post}: {post: IResult}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {post.image_url ? (
        <>
          {isLoading && <RefreshIndicator />}
          <Image
            source={{
              uri: post?.image_url,
              cache: 'force-cache',
            }}
            resizeMode={'cover'}
            style={styles.image}
            onLoadEnd={() => setIsLoading(false)}
          />
        </>
      ) : (
        <View style={styles.noImageContainer}>
          <Text style={styles.noImageText}>No Image</Text>
        </View>
      )}
    </>
  );
};

export default NewsImage;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 24,
    height: 300,
  },
  noImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '90%',
  },
  noImageText: {
    fontSize: 20,
    color: 'grey',
  },
});
