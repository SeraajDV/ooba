import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './Drawer'
import Welcome1 from '../screens/WelcomeScreen1'
import Welcome2 from '../screens/WelcomeScreen2'
import Welcome3 from '../screens/WelcomeScreen3'
import { BackHandler } from 'react-native';

const Stack = createStackNavigator();

function Main() {
  return (
    <Stack.Navigator
        headerMode='float'
        screenOptions={BackHandler.removeEventListener}
    >
      <Stack.Screen name="Welcome1" component={Welcome1} options={{headerShown: false}}/>
      <Stack.Screen name="Welcome2" component={Welcome2} options={{headerShown: false}}/>
      <Stack.Screen name="Welcome3" component={Welcome3} options={{headerShown: false}}/>
      <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default Main;