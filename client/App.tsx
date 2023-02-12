/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Navigation from './src/Navigation';
import {AuthProvider} from './src/context/AuthContext';
import {RequestProvider} from './src/context/RequestContext';

function App(): JSX.Element {
  return (
    <AuthProvider>
      <RequestProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Navigation />
        </SafeAreaView>
      </RequestProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
