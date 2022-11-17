
import React from 'react'
import NavigationStrings from '../constants/NavigationStrings'
import DetailScreen from '../Screens/Detail/DetailScreen'
import BottomTabs from './BottomTabs'


const MainStack = (Stack) => {
  return (
    <Stack.Navigator  options={{ headerShown: false }}>
      <Stack.Screen name={NavigationStrings.BTM} component={BottomTabs} />
      <Stack.Screen name={NavigationStrings.DETAILSCREEN} component={DetailScreen} />
    </Stack.Navigator>
  )
}

export default MainStack