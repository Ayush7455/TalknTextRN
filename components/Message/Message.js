import React from "react";
import {Text,View} from "react-native";const myId="u1"
const Message=({message})=>{
    const isMe=message.user.id===myId
    return (
        <View style={{backgroundColor:isMe?"lightgrey":"#3777F0",padding:10,marginLeft:isMe?"auto":10,margin:10,borderRadius:10,marginRight:isMe?10:"auto",maxWidth:"75%"}}>
            <Text style={{color:isMe?"black":"white"}}>{message.content}</Text>
        </View>
    )
}
export default Message