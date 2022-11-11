//import liraries
import React, { useState } from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComp from '../../Components/HeaderComp';
import ButtonComp from '../../Components/ButtonComp';
import { styles } from './styles';
import NavigationStrings from '../../constants/NavigationStrings'


// create a component
const Login = ({navigation,route}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const moveNext = () => {
      navigation.navigate(NavigationStrings.HOME)
     }

    return (
        <SafeAreaView style = {styles.container}>
         <HeaderComp text="Todoist" />

         <View style={styles.inputStyle}>
         <TextInputComp 
          title='Login'
          value={email}
          placeholder='E-mail Address'
          onChangeText={(val) => {
            setEmail(val)
        }}
          
         />

         <TextInputComp 
         value={password}     
          placeholder='Password'
          onChangeText={(val) => {
            setPassword(val)
        }}
          
         />

         <Text style={styles.forgetStyle}> Forget Password </Text>

         <View style={styles.btnStyle}>

        <ButtonComp
        onPress={moveNext} 
        btnText='Login'></ButtonComp>

        </View>

        <View style={styles.signnupbtnView}>
        <Text style={styles.lastLine}> Don't have an account?</Text>
        <TouchableOpacity onPress={()=>{
         navigation.navigate(NavigationStrings.SIGNUP)
        }}>
          <Text style={styles.lastlinebtn}>Sign Up</Text>
        </TouchableOpacity>
      </View>

        </View>

        </SafeAreaView>
    );
};



export default Login;
