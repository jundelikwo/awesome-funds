import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from 'src/screens/Home';
import SendFunds from 'src/screens/SendFunds';

const Stack = createStackNavigator();

// enableScreens(true);

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={() => ({
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      })}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SendFunds" component={SendFunds} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
