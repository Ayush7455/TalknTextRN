import React from "react";
import {Text,View,Image, useWindowDimensions} from "react-native";
import { Feather } from '@expo/vector-icons';
const HomeHeader=()=>{
    const {width}=useWindowDimensions()
    return (
        <View style={{flexDirection:"row",justifyContent:"space-between",width,padding:10,alignItems:"center"}}>
            <Image source={{uri:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg"}} style={{width:30,height:30,borderRadius:30}}/>
            <Text style={{flex:1,fontWeight:"bold",textAlign:"center"}}>Talk n Text</Text>
            <Feather style={{marginHorizontal:10}}name="camera" size={24} color="black" />
            <Feather style={{marginHorizontal:10}}name="edit-2" size={24} color="black" />
        </View>
    )
}
export default HomeHeader