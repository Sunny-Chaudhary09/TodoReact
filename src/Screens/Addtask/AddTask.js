import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import imagePath from '../../constants/imagesPath'
import { styles } from './styles'
import ButtonComp from '../../Components/ButtonComp'
import Navigationstrings from '../../constants/NavigationStrings'
import Modal from "react-native-modal";
import store from '../../Redux/store'
import { addtodo } from '../../Redux/action'

export default function Addtask({ navigation, route }) {
    const [openmodal, setmodal] = useState(false)
    const [title, settitle] = useState(null)
    const [notes, setnotes] = useState(null)

    let onmodalclick=() =>
    {       setmodal(!openmodal)
            store.dispatch(addtodo(title,notes))
             navigation.navigate(Navigationstrings.HOME)
    }

    let onAddbtn = () => {
        if (notes == '' && title== '') {
            alert("please enter all the fields")
            return;
        }
        if (title == '') {
            alert("please enter title...")
            return;
        }
        if (notes ==  '') {
            alert("please enter description...")
            return;
        }
        
        else  {
            setmodal(!openmodal)
        }
    }
    let onBack = () => {
        navigation.navigate(Navigationstrings.HOME)
    }
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.headerView}>
                <TouchableOpacity style={styles.backImage} onPress={onBack}><Image source={imagePath.i_back}>
                </Image></TouchableOpacity>
                <Text style={styles.headerText}>New Reminder</Text>
            </View>

            <View style={styles.taskView}>
                <TextInput
                    value={title}
                    placeholder="Title"
                    style={styles.titleInput}
                    onChangeText={(val) => { settitle(val) }}
                />
                <View style={styles.line}></View>
                <TextInput
                    value={notes}
                    placeholder="Notes"
                    multiline={true}
                    style={styles.NotesInput}
                    onChangeText={(val) => { setnotes(val) }}
                />
            </View>

            <TextInput placeholder="Details" style={styles.detailsInput} />
            <View style={styles.dateTimeView}>

                <TouchableOpacity style={styles.datetimebtn}>
                    <Image source={imagePath.i_calender} style={styles.btnimg}></Image>
                    <Text>Due Date</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.datetimebtn}>
                    <Image source={imagePath.i_time} style={styles.btnimg}></Image>
                    <Text>Time</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btnStyle}>
            <ButtonComp  btnText='Add' onPress={onAddbtn}></ButtonComp>
            </View>
            <Modal isVisible={openmodal} style={styles.modalmain} >
                <TouchableOpacity onPress={() => {
                  onmodalclick()
                }}
                    style={styles.modalview}>
                    <Image source={imagePath.ic_tick_modal}></Image>
                    <Text style={styles.modaltext}>Your Reminder has been added.</Text>
                </TouchableOpacity>
            </Modal>
        </SafeAreaView>
    )
}

