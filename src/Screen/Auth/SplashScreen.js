import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Theme from '../../Constants/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({}) => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size={'large'} />
      <Text>Loading...</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.lightWhite,
  },
});

export default SplashScreen;
