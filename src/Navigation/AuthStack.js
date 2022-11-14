import React from 'react';

import Login from '../Screens/Login/Login';
import Onbording from '../Screens/Onboarding/Onbording';
import SignUp from '../Screens/SignUp/SignUp';
import NavigationStrings from '../constants/NavigationStrings';
import AddTask from '../Screens/Addtask/AddTask';
import Home from '../Screens/Home/Home';



const AuthStack = (Stack) => {
  return (
    <Stack.Navigator  >
      <Stack.Screen name={NavigationStrings.ONBOARDING} component={Onbording} />
      <Stack.Screen name={NavigationStrings.LOGIN} component={Login} />
      <Stack.Screen name={NavigationStrings.SIGNUP} component={SignUp} />
      <Stack.Screen name={NavigationStrings.ADDTASK} component={AddTask} />
      <Stack.Screen name={NavigationStrings.HOME} component={Home} />
    </Stack.Navigator>
  )
}

export default AuthStack;