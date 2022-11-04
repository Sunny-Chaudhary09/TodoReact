import React from 'react';
import { StyleSheet, TouchableOpacity,Text } from 'react-native';
import colorsPath from '../constants/colorsPath';
import { height, moderateScale } from '../styles/responsiveSize';

const ButtonComp = (
    {
        btnText = 'Sign Up',
        onPress = () => { },
        btnImage,
        btnStyle
    }
) => {
    return (
        <TouchableOpacity style={{...style.container,...btnStyle}}
            onPress={onPress}
           
            >
            <Text style={style.btnTextStyle}>{btnText}</Text>
        </TouchableOpacity>
    );
};
const style = StyleSheet.create({
    container: {
        width:'100%',
        backgroundColor:colorsPath.PURPLE,
        alignItems:'center',
        justifyContent:'center',
        height:moderateScale(48),
        borderRadius:8
    },
    btnTextStyle:{
    color:'#FFFFFF',
    fontWeight:'bold'

    }
})
export default ButtonComp;