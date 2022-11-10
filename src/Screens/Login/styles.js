import { StyleSheet } from "react-native"
import colorPath from "../../constants/colorsPath"
import { height, moderateScale, moderateScaleVertical, textScale } from "../../styles/responsiveSize"

export const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding:moderateScale(16),
        },
        inputStyle:{
            marginTop:30,
            flex:1
        },
        textStyle:{
            marginTop:10,
            marginBottom:20,
        },

        forgetStyle:{
         justifyContent:'flex-end',
         fontSize:14,
         marginTop:10,
         alignSelf:'flex-end',
         color:colorPath.GREY
        },

        btnStyle:{
          marginTop:35
        },


        signnupbtnView: {
            flex:1,
            flexDirection: 'row',
            margin: moderateScale(10),
            alignItems:'flex-end',
            marginBottom:20,
            justifyContent: 'center'
        },
        lastLine:{
            color:colorPath.GREY
        },
        lastlinebtn:{
            color:colorPath.PURPLE,
             fontWeight:'bold'
            }

        

    });
    export default styles