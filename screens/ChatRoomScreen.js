import React, { useEffect } from "react";
import {FlatList, SafeAreaView, Text,View} from "react-native";
import Message from "../components/Message/Message";
import ChatRoomData from "../assets/dummy-data/ChatRoomData";
import MessageInput from "../components/MessageInput/MessageInput";
import { useNavigation, useRoute } from "@react-navigation/native";
const ChatRoomScreen=()=>{
    const route=useRoute();
    const navigation=useNavigation()

    useEffect(() => {
        navigation.setOptions({title:"Hello"})
    }, [])
    return (
        <SafeAreaView style={{backgroundColor:"white",flex:1}}>
            <FlatList
            data={ChatRoomData.messages}
            renderItem={({item})=><Message message={item}/>}
            inverted/>
            <MessageInput/>
            
        </SafeAreaView>
    )
}
export default ChatRoomScreen