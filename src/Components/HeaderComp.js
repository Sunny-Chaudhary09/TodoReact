import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colorsPath from '../constants/colorsPath';
import { moderateScaleVertical } from '../styles/responsiveSize';
const HeaderComp = ({
    text
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{text}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {

        // height:34,
        justifyContent:'center',
        width:"100%",
        alignItems:'center'

    },
    textStyle:{
        fontSize: 34,
        fontWeight: 'bold',
        color:colorsPath.PURPLE
    }
});
export default HeaderComp;