import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Wearables from './pages/Wearables';
import Profile from './pages/Profile';
import Help from './pages/Help';

bottomNavigatorConfigs = {
  initialRouteName: "HomeScreen",
  tabBarOptions: {
      style:{height:300}
  }, 
};
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Wearables"
        component={Wearables}
        options={{
          tabBarLabel: 'Wearables',
          tabBarIcon: ({ color }) => (
            <Image source={require('./resources/icon/wearables-icon.png')} style={{width:20, height:20}}/>
            )
          }}
      >
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={Profile} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Image source={require('./resources/icon/Shape.png')} style={{width:15, height:15}}/>
            )
        }}
        />
      <Tab.Screen 
        name="Help"
        component={Help} 
        options={{
          tabBarLabel: 'Help',
          tabBarIcon: ({ color }) => (
            <Image source={require('./resources/icon/Shape.png')} style={{width:15, height:15}}/>
            )
        }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
