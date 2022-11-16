//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

// create a component
const TestScreen = () => {

    const mydata =[
        {name:'Ajay',Profession:'Software Engineer'},
        {name:'Anuj',Profession:'Software Engineer'}
    ];

    function getData(){
        setTimeout(() => {
            let output = "";
            mydata.forEach((data,index) =>{
                output+=`${data.name} + ${data.Profession}`
            })
            console.log('checkoutput : ',output)
        },1000
       
        );
    }

    // callback use

    // function createdata(newdata,callback){
    //     setTimeout(() => {
    //         mydata.push(newdata)
    //         callback();
    //     },2000

    //     )
    // }

    // createdata({name:'Vivek',Profession:'Software Engineer'},getData)


    // Promises use

    function createdata(newdata,callback){
       
        return new Promise((resolve,reject) => {

            setTimeout(() => {
                mydata.push(newdata)
                let error = false;
                if(!error){
                    resolve();
                } else{
                    reject('Something went wrong')
                }
            },2000
    
            );
        })
        }


    
    createdata({name:'Vivek',Profession:'Software Engineer'})
    .then(getData)
    .catch(err => console.log(err))

    // Async & Await

    // async function start(){
    //     await createdata({name:'Vivek',Profession:'Software Engineer'}) 
    //     getData()
    // }
    // start()




};

export default TestScreen;
