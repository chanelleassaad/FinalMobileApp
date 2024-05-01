import React, {useState} from 'react';
import NewsScreen from '../screens/NewsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import HeaderRight from '../components/organisms/HeaderRight';
import SignOutModal from '../components/organisms/SignOutModal';

const Tab = createNativeStackNavigator();

const AuthNav = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1}}>
      <Tab.Navigator>
        <Tab.Screen
          name="CA News"
          component={NewsScreen}
          options={{
            headerRight: () => <HeaderRight onPress={toggleModal} />,
          }}
        />
      </Tab.Navigator>
      <SignOutModal isVisible={isModalVisible} toggleModal={toggleModal} />
    </View>
  );
};

export default AuthNav;
