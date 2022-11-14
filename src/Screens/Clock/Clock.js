//import liraries
import React, { useState,useEffect } from 'react';
import { styles } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, FlatList,Image } from 'react-native';
import axios from 'axios';



const Clock = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [maindata, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    myData()
   }, []);


 const myData = async() => {
    try {
      const res = await axios.get("https://dummyjson.com/products?skip=0&limit=20")
      const mainData=res.data.products
      setData(mainData)
      console.log("my api data",mainData)
      setIsLoading(false);
    } catch (error) {
      console.log("error riased")
      setIsLoading(false);
    }
  }

    const renderItemfun = ({ item, index }) => {
      return (
        <View style={styles.flatview}>
             <Image source={{uri:item.thumbnail}} style={{height:60,width:60}} ></Image>
            <View style={{flexDirection:'column'}}>
            <Text style={styles.flatText}>{item.title}</Text>
            <Text style={styles.flatText} numberOfLines={5}>{item.description}</Text>
            </View>
          
        </View>
      )
    }

    return (    
         <SafeAreaView style={styles.container}>
           <View>
           <FlatList
          data={maindata}
          renderItem={renderItemfun}
          onEndReached={this.onEndReached}
         />
             </View>
         </SafeAreaView>
         
    );
};


export default Clock;
