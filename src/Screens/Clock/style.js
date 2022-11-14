import { StyleSheet } from "react-native";
import colorPath from "../../constants/colorsPath";
import { moderateScale, moderateScaleVertical, verticalScale, width } from "../../styles/responsiveSize";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colorPath.LIGHTGREY
    },
    flatview: {
    flexDirection:'row',
    marginTop: verticalScale(20),
    padding: moderateScale(10),
    backgroundColor: colorPath.WHITE,
    borderRadius: moderateScale(10),
    marginHorizontal: moderateScale(16),
    flexWrap:'wrap'
    },
    flatText:{
    color:colorPath.PURPLE,
    fontWeight:'bold' 
    },
    });