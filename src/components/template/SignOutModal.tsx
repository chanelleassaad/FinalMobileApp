import React from 'react';
import {Modal, View, Text, Button, Image, StyleSheet} from 'react-native';
import {useAuth} from '../../store/authentication/AuthContext';
import {useDispatch, useSelector} from 'react-redux';
import {resetPosts} from '../../store/PostsReducer';

interface IProps {
  isVisible: boolean;
  toggleModal: () => void;
}

const SignOutModal = ({isVisible, toggleModal}: IProps) => {
  const {userToken} = useSelector((state: any) => state.auth);
  const {signOut} = useAuth();
  const dispatch = useDispatch();

  const logout = async () => {
    await signOut();
    dispatch(resetPosts());
  };

  return (
    <Modal visible={isVisible}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/icon.png')}
          resizeMode="contain"
        />
        <Text>{userToken.email}</Text>
        <View>
          <Text>Are you sure you want to sign out?</Text>
          <View style={styles.buttons}>
            <Button title="No" onPress={toggleModal} />
            <Button title="Yes" onPress={logout} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SignOutModal;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    marginBottom: 20,
  },
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
