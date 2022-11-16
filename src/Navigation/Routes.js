//import liraries
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer >
        {false ? MainStack(Stack) : AuthStack(Stack)}
    </NavigationContainer>
  )
}

export default Routes