import { StyleSheet } from "react-native";
import colorPath from "../../constants/colorsPath";
import { moderateScale, moderateScaleVertical, textScale, verticalScale } from "../../styles/responsiveSize";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorPath.LIGHTGREY,
    
    },
    headerView: {
        margin: moderateScale(16),
        flexDirection: 'row',
    },
    backImage: { justifyContent: 'center' },
    headerText: {
        fontWeight: 'bold',
        marginLeft: moderateScale(10),
        fontSize: textScale(14)
    },
    taskView: {
        height: verticalScale(300),
        backgroundColor: colorPath.WHITE,
        margin: moderateScale(16),
        borderRadius: moderateScale(10),
        padding: moderateScale(20)

    },
    line: {
        height: 1,
        marginVertical: moderateScaleVertical(16),
        backgroundColor: colorPath.GREY
    },
    titleInput: {
        // padding: moderateScale(2)
    },
    NotesInput: {
        flex: 1,
        // padding: moderateScale(25)
    },
    detailsInput: {
        padding: moderateScale(25),
        backgroundColor: colorPath.WHITE,
        marginHorizontal: moderateScale(16),
        borderRadius: moderateScale(10)
    },
    dateTimeView: {
        margin: moderateScale(16),
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1

    },
    datetimebtn: {
        backgroundColor: colorPath.WHITE,
        height: moderateScale(40),
        width: moderateScale(155),
        justifyContent: 'center',
        alignItems: 'center',
        padding: moderateScale(5),
        borderRadius: moderateScale(10),
        flexDirection: 'row'
    },
    btnimg: {
        marginRight: moderateScale(5)
    },
    modalview:
    {
        height: 180,
        width: moderateScale(230),
        alignItems: 'center',
        justifyContent: 'center', backgroundColor: colorPath.PURPLE, borderRadius: moderateScale(8),
        padding: moderateScale(35)
    },
    modaltext:
    {
        color: colorPath.WHITE,
        fontWeight: 'bold',
        padding: 5
    },
    modalmain: {
        justifyContent: 'center',
        alignItems: "center"
    },

    btnStyle: {
     padding:25,
     marginBottom:35

    }
});