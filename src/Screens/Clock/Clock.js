//import liraries
import React, { useState,useEffect } from 'react';
import { styles } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, FlatList,Image } from 'react-native';
import axios from 'axios';


const Clock = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [maindata, setData] = useState([]);
    const [offset, setOffset] = useState(0);
   
       useEffect(() => {
        myData()
            }, []);
                        
   const myData = async() => {
    try {
      if(offset===100)
      {return}
      const prevdata=maindata
      console.log("My sync called")
      const res = await axios.get(`https://dummyjson.com/products?skip=${offset}&limit=20`)
      const currData=res.data.products
      console.log("Api data",currData)
      setOffset(offset+20)
      setData([...prevdata,...currData])
    } 
    catch (error) {
      console.log("error riased")
    }
    
  }

    const renderItemfun = ({ item, index }) => {
      return (
        <View style={styles.flatview}>
             <Image source={{uri:item.thumbnail}} style={{height:150,width:300}} ></Image>
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
          ListFooterComponent={()=>{return(
            <View style={{flex:1}}>
              <Text>no items in list</Text>
            </View>
          )}}
          onEndReachedThreshold={1}
          onEndReached={()=>{myData()}}
            />
             </View>
         </SafeAreaView>
         
    );
};

export default Clock;
