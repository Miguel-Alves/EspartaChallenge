import 'react-native-gesture-handler';

import React from 'react';
import {View, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#FAEEED" />
      <View style={{flex: 1, backgroundColor: '#FAEEED'}}>
        <Routes />
      </View>
    </NavigationContainer>
  );
}

export default App;
