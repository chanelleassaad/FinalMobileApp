import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import AuthProvider from './src/store/authentication/AuthProvider';
import {Provider} from 'react-redux';
import store from './src/store/store';
import BootSplash from 'react-native-bootsplash';

function App(): React.JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      BootSplash.hide({fade: true});
    }, 3000);
  }, []);

  return (
    <Provider store={store}>
      <AuthProvider>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </AuthProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(37, 100, 235, 1)',
  },
});

export default App;
