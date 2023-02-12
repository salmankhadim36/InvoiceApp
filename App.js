import StackNavigation from './src/Navigation/StackNavigation';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from './src/Screen/Auth/SplashScreen';
import {getUserToken} from './src/api/userApis';

const App = () => {
  const [hasDoneLoading, setHasDoneLoading] = useState(false);
  useEffect(() => {
    let requestData = {
      onSuccess: (d) => {
        setHasDoneLoading(true);
      },
      onError: e => {},
    };
    getUserToken(requestData);
  }, []);
  return (
    <>
      {!hasDoneLoading ? (
        <SplashScreen />
      ) : (
        <GestureHandlerRootView style={{flex: 1}}>
          <SafeAreaView style={{flex: 1}}>
            <StackNavigation />
          </SafeAreaView>
        </GestureHandlerRootView>
      )}
    </>
  );
};
export default App;
