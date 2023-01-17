import React from "react";
import {Text,View,Image, useWindowDimensions} from "react-native";
import { Feather } from '@expo/vector-icons';
const ChatRoomHeader=(props)=>{
    const {width}=useWindowDimensions()
    return (
        <View style={{flexDirection:"row",justifyContent:"space-between",width:width-25,padding:10,alignItems:"center"}}>
            <Image source={{uri:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg"}} style={{width:30,height:30,borderRadius:30}}/>
            <Text style={{flex:1,fontWeight:"bold",marginLeft:10}}>{props.children}</Text>
        </View>
    )
}
export default ChatRoomHeader