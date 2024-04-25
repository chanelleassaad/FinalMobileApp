import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import AuthProvider from './src/store/authentication/AuthProvider';
import {Provider} from 'react-redux';
import store from './src/store/store';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#21618C',
  },
});

export default App;
