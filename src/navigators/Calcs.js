import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Calculator from '../screens/CalculatorsScreens';
import Calc2 from '../screens/Calc2';
// import Calc3 from './Calc3';
// import Calc4 from './Calc4';


const Tab = createMaterialTopTabNavigator();

function Calcs() {
  return (
    <Tab.Navigator
        tabBarOptions={{
            tabStyle: {height: 100}
        }}
    >
      <Tab.Screen name="BOND PAYMENT" component={Calculator} />
      <Tab.Screen name="Monthly repayments" component={Calc2} />
      {/* <Tab.Screen name="Transfer Cost" component={Calc3} />
      <Tab.Screen name="Extra Payments" component={Calc4} /> */}
    </Tab.Navigator>
  );
}

export default Calcs;