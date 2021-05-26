/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CalculatorPage from './components/CalculatorPage';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#ea0000" />
      <View style={styles.backgroundContainer}>
          <CalculatorPage />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: '#222',
    flex: 1
  }
});

export default App;
