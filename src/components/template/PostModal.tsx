import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
  Linking,
} from 'react-native';
import RefreshIndicator from '../atoms/RefreshIndicator';
import {IResult} from '../../interfaces/RootInterface';

interface IProps {
  isVisible: boolean;
  post: IResult;
  toggleModal: () => void;
}

const NewsPopup = ({isVisible, post, toggleModal}: IProps) => {
  const isArabic = post.language === 'arabic';
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Modal animationType="slide" visible={isVisible}>
      <View style={styles.modal}>
        <Button onPress={toggleModal} title="Close" />
        <View style={styles.header}>
          {post.source_icon && (
            <Image source={{uri: post.source_icon}} style={styles.icon} />
          )}
          <Text style={[styles.h1, {textAlign: isArabic ? 'right' : 'left'}]}>
            {post.title}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          {post.image_url && (
            <>
              {isLoading && <RefreshIndicator />}
              <Image
                source={{
                  uri: post?.image_url,
                  cache: 'force-cache',
                }}
                resizeMode={'cover'}
                style={styles.imageDisplay}
                onLoadEnd={() => setIsLoading(false)}
              />
            </>
          )}
        </View>
        <View style={styles.details}>
          {post.creator && post.creator[0] !== '' && (
            <Text style={styles.creator}>by {post.creator.join(', ')}</Text>
          )}
          {post.pubDate && (
            <Text style={styles.creator}>
              {new Date(post.pubDate).toLocaleDateString()}{' '}
            </Text>
          )}
        </View>
        {post.description && (
          <ScrollView style={styles.descriptionContainer}>
            <Text
              style={[
                styles.description,
                {textAlign: isArabic ? 'right' : 'left'},
              ]}>
              {post.description.replace(/nbsp;/g, '')}
            </Text>
          </ScrollView>
        )}
        <View style={styles.moreDetails}>
          <Text>More details on</Text>
          <TouchableOpacity onPress={() => Linking.openURL(post.link)}>
            <Text style={styles.moreDetailsText}>{post.link}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#bfcdea',
    padding: 20,
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  imageContainer: {
    marginTop: 10,
  },
  imageDisplay: {
    width: '100%',
    height: 200,
  },
  icon: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  creator: {
    fontSize: 16,
  },
  descriptionContainer: {
    marginTop: 10,
    maxHeight: 200,
  },
  description: {
    fontSize: 16,
  },
  moreDetails: {
    marginTop: 20,
  },
  moreDetailsText: {
    fontSize: 14,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default NewsPopup;