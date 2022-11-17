//import liraries
import React, { useState,useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios';

// create a component
const DetailScreen = ({navigate,route}) => {
    const [maindata, setdata]=useState({})
    const data=route.params

    let pId = data.id

    useEffect(() => {
        myData()
            }, []);

    const myData = async() => {
        try {
          const res = await axios.get(`https://dummyjson.com/products/${pId}`)
          console.log("Item data",res)
          setdata(res.data)
          console.log("data we have to use",maindata)
        } 
        catch (error) {
          console.log("error raised")
        }
        
      }
    return (
        <View style={{padding:20}}>
            <Image source={{uri:maindata.thumbnail}} style={{height:150}} ></Image>
            <Text style={{marginTop:12}}>{maindata.title}</Text>
            <Text style={{marginTop:5}}>{maindata.description}</Text>
        </View>
    );
};


//make this component available to the app
export default DetailScreen;
