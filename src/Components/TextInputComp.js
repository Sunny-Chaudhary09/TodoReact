import React from "react";
import { Image,Text,TextInput,StyleSheet,TouchableOpacity,View } from "react-native";
import { height, moderateScale } from "../styles/responsiveSize";
import colorsPath from "../constants/colorsPath";


const TextInputComp = ({
    img = '',
    title = '',
    value = '',
    onChangeText = () => { },
    placeholder = '',
}) => {
    return (
        <View>
        <Text style={styles.textStyle}>{title}</Text>
        <View style={styles.container}>
        <TextInput
         value={value}
         onChangeText = {onChangeText}
         placeholder = {placeholder}
        />
        </View>

        <TouchableOpacity>
            <Image source={img} />
        </TouchableOpacity>

        </View>

    )
}

export default TextInputComp

const styles = StyleSheet.create({
  container : {
    height : moderateScale(40),
    marginTop: moderateScale(10),
    flexDirection : 'row',
    justifyContent : 'space-between',
    backgroundColor:colorsPath.WHITE,
    borderRadius:8,
    padding:moderateScale(14)
  },
  textStyle:{
    fontSize:28,
    fontWeight:'bold',
    color:colorsPath.PURPLE
  }

})