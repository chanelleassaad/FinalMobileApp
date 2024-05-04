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
          <Text
            style={[styles.title, {textAlign: isArabic ? 'right' : 'left'}]}>
            {post.title}
          </Text>
        </View>
        <View style={styles.allData}>
          <View style={styles.imageContainer}>
            {post.image_url && (
              <>
                {isLoading && <RefreshIndicator />}
                <Image
                  source={{uri: post.image_url, cache: 'force-cache'}}
                  resizeMode="cover"
                  style={styles.imageDisplay}
                  onLoadEnd={() => setIsLoading(false)}
                />
              </>
            )}
          </View>
          <View style={styles.imageDetails}>
            {post.creator && post.creator[0] !== '' && (
              <Text style={styles.creator}>by {post.creator.join(', ')}</Text>
            )}
            {post.pubDate && (
              <Text style={styles.pubDate}>
                {new Date(post.pubDate).toLocaleDateString()}
              </Text>
            )}
          </View>
          <ScrollView>
            {post.description && (
              <View style={styles.descriptionContainer}>
                <Text
                  style={[
                    styles.description,
                    {textAlign: isArabic ? 'right' : 'left'},
                  ]}>
                  {post.description.replace(/nbsp;/g, '')}
                </Text>
              </View>
            )}
            <View style={styles.moreDetails}>
              <Text>More details on</Text>
              <TouchableOpacity onPress={() => Linking.openURL(post.link)}>
                <Text style={styles.link}>{post.link}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    marginTop: 25,
    marginBottom: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#bfcdea',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  icon: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  allData: {
    backgroundColor: '#bfcdea',
    height: '83%',
    padding: 10,
    borderRadius: 5,
  },
  imageContainer: {
    marginVertical: 10,
  },
  imageDisplay: {
    width: '100%',
    height: 200,
  },
  imageDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  creator: {
    fontSize: 16,
  },
  pubDate: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  descriptionContainer: {
    maxHeight: 200,
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
  },
  moreDetails: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  link: {
    fontSize: 14,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default NewsPopup;
