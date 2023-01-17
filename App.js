import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Message from './components/Message/Message';
import ChatRoomScreen from './screens/ChatRoomScreen';
import HomeHeader from './components/HomeHeader';
import ChatRoomHeader from './components/ChatRoomHeader';
import {withAuthenticator} from "aws-amplify-react-native"
import {Amplify} from "aws-amplify"
const config = {
  "aws_project_region": "ap-northeast-1",
  "aws_appsync_graphqlEndpoint": "https://s4aew2xy6bff5ljzwgyq5u45vm.appsync-api.ap-northeast-1.amazonaws.com/graphql",
  "aws_appsync_region": "ap-northeast-1",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": "da2-r3rtia57sff5pgh6cyh2xbgmuu",
  "aws_cognito_identity_pool_id": "ap-northeast-1:08962eca-1a2a-4c8e-b5e8-f29c76e78e7a",
  "aws_cognito_region": "ap-northeast-1",
  "aws_user_pools_id": "ap-northeast-1_pBi6l7gSP",
  "aws_user_pools_web_client_id": "6b5kdm5o0amf6c4kukj9008ajq",
  "oauth": {},
  "aws_cognito_username_attributes": [
      "EMAIL"
  ],
  "aws_cognito_social_providers": [],
  "aws_cognito_signup_attributes": [],
  "aws_cognito_mfa_configuration": "OFF",
  "aws_cognito_mfa_types": [
      "SMS"
  ],
  "aws_cognito_password_protection_settings": {
      "passwordPolicyMinLength": 8,
      "passwordPolicyCharacters": []
  },
  "aws_cognito_verification_mechanisms": [
      "EMAIL"
  ]
};

Amplify.configure(config)
function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} 
      options={{headerTitle:HomeHeader}}/>
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} options={{headerTitle:ChatRoomHeader,headerBackTitleVisible:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
export default withAuthenticator(App)
