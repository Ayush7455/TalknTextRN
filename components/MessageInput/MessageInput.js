import React, { useState } from "react";
import {Text,View,TextInput, Pressable, KeyboardAvoidingView, Platform} from "react-native";
import {SimpleLineIcons,Feather,MaterialCommunityIcons,AntDesign,Ionicons } from "@expo/vector-icons"
const MessageInput=()=>{
    const [message,setMessage]=useState("")
    return(
        <KeyboardAvoidingView style={{flexDirection:"row",padding:10}}
        behavior={Platform.OS==="ios"?"padding":"height"}
        keyboardVerticalOffset={100}
        >
            <View style={{backgroundColor:"#f2f2f2",flex:1,marginRight:10,borderRadius:25,justifyContent:"center",
            alignItems:"center",borderWidth:1,borderColor:"#dedede",flexDirection:"row",padding:5}}>
                <SimpleLineIcons style={{marginHorizontal:5}} name="emotsmile" size={24} color="#595959"/>
            <TextInput style={{flex:1,marginHorizontal:5}}
            value={message}
            placeholder="Send a message" onChangeText={(text)=>setMessage(text)}/>
            <Feather name="camera" size={24} color="#595959" style={{marginHorizontal:5}}/>
            <MaterialCommunityIcons name="microphone-outline" size={24} color="#595959" style={{marginHorizontal:5}}/>
            
            </View>
            <Pressable onPress={()=>console.warn("Hi")} style={{width:40,height:40,backgroundColor:"#3777f0",borderRadius:25,justifyContent:"center",alignItems:"center"}}>
           {message?<Ionicons name="send" size={18} color="white" />:<AntDesign name="plus" size={24} color="white" />}
            </Pressable>
            
        </KeyboardAvoidingView>
    )
}
export default MessageInput