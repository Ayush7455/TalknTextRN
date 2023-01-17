import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Text,View,Image, Pressable} from "react-native";
const ChatRoomItem=({ChatRoom})=>{
  const navigation=useNavigation()
    return (
        <Pressable onPress={()=>navigation.navigate("ChatRoom",{id:ChatRoom.id})} style={{flexDirection:"row",padding:10}}>
        
       <Image source={{
        uri:ChatRoom.users[1].imageUri
       }} style={{width:50,height:50,borderRadius:25,marginRight:10}}/>

       {ChatRoom.newMessages?<View style={{backgroundColor:"#3872E9",width:20,height:20,justifyContent:"center",alignItems:"center",borderRadius:10,position:"absolute",left:45,top:10,borderWidth:1,borderColor:"white"}}>
        <Text style={{color:"white"}}>{ChatRoom.newMessages}</Text>
        </View>:null}
       <View style={{flex:1,justifyContent:"center"}}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <Text style={{fontWeight:"bold",fontSize:18}}>{ChatRoom.users[1].name}</Text>
        <Text style={{color:"grey"}}>{ChatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={{color:"grey"}}>{ChatRoom.lastMessage.content}</Text>
       </View>
       </Pressable>
    )

}
export default ChatRoomItem