//import liraries
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onbording from '../Screens/Onboarding/Onbording';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
      <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name="Onboarding" component={Onbording}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  export default Routes