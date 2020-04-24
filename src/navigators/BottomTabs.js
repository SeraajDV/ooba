import React from 'react';
import DashboardScreen from '../screens/DashboardScreen';
import CalculatorsScreen from '../navigators/Calcs';
import PrequalifyScreen from '../screens/PrequalifyScreen';
import ApplicationScreen from '../screens/ApplicationScreen';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Tab = createMaterialBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'DASHBOARD';

export default function BottomTabs({route, navigation}) {
    navigation.setOptions({ headerTitle: getHeaderTitle(route)  });
    
   

    return (
     
        <Tab.Navigator
            backBehavior="initialRoute"
            barStyle={{backgroundColor: 'white'}}
            inactiveColor='#617D7D'
            activeColor= '#6FC04C'
            
        >
          <Tab.Screen name="Dashboard" component={DashboardScreen} 
              options={{ 
                  title: 'Dashboard',                
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
          />
          <Tab.Screen name="Calculator" component={CalculatorsScreen}  
              options={{
                  title: 'Calculator',
          tabBarLabel: 'Calculators',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calculator-variant" color={color} size={26} />
          ),
        }}
          />
          <Tab.Screen 
            name="Prequalify" 
            component={PrequalifyScreen} 
            options={{
                title:"Prequalify",
          tabBarLabel: 'Prequalify',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="file-check" color={color} size={26} />
          ),
        }}
        />
          <Tab.Screen name="Application" component={ApplicationScreen}  
              options={{
                title:"Application",
          tabBarLabel: 'Application',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard-text-outline" color={color} size={26} />
          ),
        }}
          />
        </Tab.Navigator>

        
      );
}

function getHeaderTitle(route) {
    const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
  
    switch (routeName) {
      case 'DASHBOARD':
        return 'DASHBOARD';
      case 'Calculator':
        return 'CALCULATORS';
      case 'Prequalify':
        return 'PREQUALIFY';
      case 'Application':
        return 'APPLICATION';
          return '';
    }
  }
  