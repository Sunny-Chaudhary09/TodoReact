
import React from 'react'
import NavigationStrings from '../constants/NavigationStrings'
import BottomTabs from './BottomTabs'


const MainStack = (Stack) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NavigationStrings.BTM} component={BottomTabs} />
    </Stack.Navigator>
  )
}

export default MainStack