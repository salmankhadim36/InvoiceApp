import React from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AddInvoice from '../../src/Screen/Auth/AddInvoice';

import HomeScreen from '../Screen/Auth/HomeScreen';

const Stack = createNativeStackNavigator();
function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddInvoice"
          component={AddInvoice}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default StackNavigation;
