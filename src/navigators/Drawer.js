import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './BottomTabs';
import Faqs from '../screens/FaqsScreen'
import Advice from '../screens/AdviceScreen'
import Contact from '../screens/ContactScreen'
import SignOut from '../screens/SignOutScreen'

const Drawer = createDrawerNavigator();


function MyDrawer() {
  return (
    <Drawer.Navigator
        initialRouteName="Dashboard"
        backBehavior="initialRoute"
    >
      <Drawer.Screen name="Dashboard" component={Dashboard} options={{backBehavior: 'none'}} />
      <Drawer.Screen name="Faqs" component={Faqs} />
      <Drawer.Screen name="Advice" component={Advice} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="Sign Out" component={SignOut} options={{backBehavior: 'none'}} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;