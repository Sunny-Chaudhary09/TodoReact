//import liraries
import React, { useState } from 'react';
import { Text, View,TouchableOpacity,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComp from '../../Components/HeaderComp';
import ButtonComp from '../../Components/ButtonComp';
import TextInputComp from '../../Components/TextInputComp';
import { styles } from './styles';
import NavigationStrings from '../../constants/NavigationStrings'
import imagePath from '../../constants/imagesPath'


// create a component
const SignUp = ({navigation,route}) => {

    const [name,setName] = useState('')
    const [phoneNumber,setphone] = useState('')
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
          title='Sign Up'
          value={name}
          placeholder='Name'
          onChangeText={(val) => {
            setName(val)
        }}
          
         />

        <TextInputComp 
         value={phoneNumber}     
          placeholder='Phone Number'
          onChangeText={(val) => {
            setphone(val)
        }}
          
         />

        <TextInputComp 
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
        btnText='Sign Up'></ButtonComp>
        </View>

        <Text style={styles.OrStyle}>OR</Text>

        <Text style={styles.SignUpWith}>Signup with</Text>

        <View style={styles.imagesStyles}>

          <TouchableOpacity>
          <Image source={imagePath.ic_mail}></Image>
          </TouchableOpacity>

          <TouchableOpacity>
          <Image source={imagePath.ic_apple}></Image>
          </TouchableOpacity>

          <TouchableOpacity>
          <Image source={imagePath.ic_facebook}></Image>
          </TouchableOpacity>

        </View>

        <View style={styles.signnupbtnView}>
        <Text style={styles.lastLine}> Already have an account?</Text>
        <TouchableOpacity onPress={()=>{
         navigation.navigate(NavigationStrings.LOGIN)
        }}>
          <Text style={styles.lastlinebtn}>Login</Text>
        </TouchableOpacity>
      </View>

        </View>

        </SafeAreaView>
    );
};



export default SignUp;
