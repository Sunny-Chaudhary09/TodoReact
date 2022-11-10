//import liraries
import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from "./styles"
import HeaderComp from '../../Components/HeaderComp'
import imagePath from '../../constants/imagesPath'
import ButtonComp from '../../Components/ButtonComp'
import Swiper from 'react-native-swiper'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavigationStrings from '../../constants/NavigationStrings'
import colorsPath from '../../constants/colorsPath'


export default function Onboarding({navigation,route}) {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComp text="Todoist" />
      <Swiper dotStyle={{height:4,width:50}}
           activeDotStyle={{height:4,width:50}} 
           activeDotColor={colorsPath.PURPLE}
           >
        <View style={styles.slideView}>
          <Image source={imagePath.Onboard_1}></Image>
          <Text style={styles.slideText}>Manage Tasks</Text>
        </View >
        <View style={styles.slideView}>
          <Image source={imagePath.Onboard_2}></Image>
          <Text style={{ ...styles.slideText }}>Get Remainders on time.</Text>
        </View>
        <View style={styles.slideView}>
          <Image source={imagePath.Onboard_3}></Image>
          <Text style={styles.slideText}>Prioritize wisely.</Text>
        </View>
      </Swiper>
      <View style={styles.onboardTxtview}>
        <Text>Dolore laboris veniam et consectetur qui qui do.Ut duis ex quis exercitation. Adipisicing excepteur duis in deserunt et occaecat mollit irure eiusmod ut.
        </Text>
      </View>
      <ButtonComp btnText='Sign Up' ></ButtonComp>
      <View style={styles.signnupbtnView}>
        <Text style={styles.lastLine}> Already have an account?</Text>
        <TouchableOpacity onPress={()=>{
         navigation.navigate(NavigationStrings.LOGIN)
        }}>
          <Text style={styles.lastlinebtn}>Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}


