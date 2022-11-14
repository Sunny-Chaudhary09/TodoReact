import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationStrings from '../constants/NavigationStrings'
// import * as Screens from '../Screens'
import imagePath from '../constants/imagesPath';
import colorPath from '../constants/colorsPath'
import { moderateScale, moderateScaleVertical, width } from '../styles/responsiveSize';
import Home from '../Screens/Home/Home';
import Clock from '../Screens/Clock/Clock';
import AddTask from '../Screens/Addtask/AddTask';
import Calender from '../Screens/Calender/Calender';
import Profile from '../Screens/Profile/Profile';
                                                                                                                             
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator screenOptions={styles.container}>
            <Tab.Screen options={{
                tabBarIcon: ({ route, focused }) => {
                    return (
                        <Image style={{ tintColor: focused ? colorPath.PURPLE : null }} source={imagePath.i_home} />
                    )
                }
            }} name={NavigationStrings.HOME} component={Home} />

            <Tab.Screen options={{
                tabBarIcon: ({ route, focused }) => {
                    return (
                        <Image style={{ tintColor: focused ? colorPath.PURPLE : null }} source={imagePath.ic_clock} />
                    )
                }
            }} name={NavigationStrings.CLOCK} component={Clock} />

            <Tab.Screen options={{
                tabBarStyle: { display: "none" }, tabBarIconStyle: { position: 'absolute', bottom: moderateScaleVertical(20) }, tabBarIcon: ({ route, focused }) => {
                    return (
                        <Image source={imagePath.i_group} />
                    )
                }
            }}
                name={NavigationStrings.ADDTASK} component={AddTask} />

            <Tab.Screen options={{
                tabBarIcon: ({ route, focused }) => {
                    return (
                        <Image style={{ tintColor: focused ? colorPath.PURPLE : null }} source={imagePath.i_calender} />
                    )
                }
            }} name={NavigationStrings.CALENDER} component={Calender} />

            <Tab.Screen options={{
                tabBarIcon: ({ route, focused }) => {
                    return (
                        <Image style={{ tintColor: focused ? colorPath.PURPLE : null }} source={imagePath.i_account} />
                    )
                }
            }} name={NavigationStrings.PROFILE} component={Profile} />

        </Tab.Navigator>
    )
}

export default BottomTabs

const styles = StyleSheet.create({
    container: {
        headerShown:false,
        tabBarShowLabel: false,
        tabBarStyle: {
            position: 'absolute',
            bottom: moderateScaleVertical(20),
            borderRadius: moderateScale(10),
            height: moderateScaleVertical(60),
            marginHorizontal: moderateScale(24),
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: moderateScale(26)
        }
    }
})