import React from 'react';
import { View } from 'react-native-animatable';
import { createStackNavigator } from '@react-navigation/stack';
import { Alert,Button,Text } from 'react-native';
import Btn from '../Btn'
import AppText from '../AppText';

import colors from '../config/colors';
import splashScreen from './splashScreen';

import SignUpScreen from './SignUpScreen';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'



const TriStack = createStackNavigator();

const TriStackScreen = ({navigation}) => {
      
    
  
return(
    <View>
        <AppText style={{marginLeft:10,marginTop:20}}>Do You Wish to Logout</AppText>
        <View style={{ flexDirection: "row",width: "100%", marginLeft:160 }}>
        <Btn title="Yes" onClick={() => firebase.auth().signOut()} style={{ width: "25%",backgroundColor:colors.blue}} />
        <Btn title="No" onClick={()=>navigation.navigate('Main')} style={{ width: "25%" ,marginLeft:5, backgroundColor:colors.white  }} />
        </View>
    </View>
    
   
);
}
export default TriStackScreen; 