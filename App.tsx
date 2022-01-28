import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {t} from 'react-native-tailwindcss';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigation from './src/routes/rootNavigation';
const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar translucent={false} backgroundColor={'white'} barStyle="dark-content" />
      <RootNavigation/>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
