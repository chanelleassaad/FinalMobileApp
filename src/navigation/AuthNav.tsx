import React, {useState} from 'react';
import NewsScreen from '../screens/NewsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, View} from 'react-native';
import HeaderRight from '../components/organisms/HeaderRight';
import SignOutModal from '../components/template/SignOutModal';

const Tab = createNativeStackNavigator();

const AuthNav = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const headerUser = () => <HeaderRight onPress={toggleModal} />;

  return (
    <View style={styles.nav}>
      <Tab.Navigator>
        <Tab.Screen
          name="CA News"
          component={NewsScreen}
          options={{
            headerRight: headerUser,
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'rgba(37, 100, 235, 1)'},
          }}
        />
      </Tab.Navigator>
      <SignOutModal isVisible={isModalVisible} toggleModal={toggleModal} />
    </View>
  );
};

export default AuthNav;

const styles = StyleSheet.create({
  nav: {
    flex: 1,
  },
});
