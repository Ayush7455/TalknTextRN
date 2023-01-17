import React from "react";
import {FlatList, Image, Pressable, Text,View} from "react-native";
import ChatRoomItem from "../components/chatroomitem";
import ChatRooms from "../assets/dummy-data/ChatRooms";
import {Auth} from "aws-amplify"

const HomeScreen=()=>{
    const ChatRoom1=ChatRooms[3]
    const ChatRoom2=ChatRooms[1]
    const Logout=()=>{
        Auth.signOut()
    }

    return (
       <View style={{backgroundColor:"white",flex:1}}>
        <FlatList
        data={ChatRooms}
        renderItem={({item})=><ChatRoomItem key={item.id} ChatRoom={item}/>}
        />
<Pressable onPress={()=>Logout()} style={{backgroundColor:"red",height:40,width:"90%",alignItems:"center",justifyContent:"center",margin:18,borderRadius:20}}>
    <Text>Logout</Text>
</Pressable>
       </View>
    )
}
export default HomeScreen