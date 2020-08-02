import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppNavigator} from '@navigator';
import {Provider} from 'react-redux';
import store from './src/controllers/Store';

function App() {
  return (
    <Provider store={store.store}>
      <SafeAreaProvider>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={'transparent'}
          translucent={true}
        />
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
