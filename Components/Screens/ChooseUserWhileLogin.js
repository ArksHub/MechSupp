import React,{useState} from 'react';
import {     View,     Text,     TouchableOpacity,     Dimensions,   StyleSheet,   StatusBar,    Image, KeyboardAvoidingView}  from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import SecondryButton from '../Buttons/SecondryButton';

import TextBox from '../TextBox';

import * as Yup from "yup";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import AppButton from '../Buttons/AppButton';


function ChooseUserWhileLogin({navigation}) {
  
    return (
      
        <View style={styles.container}>
            <StatusBar backgroundColor='#0070FF' barStyle="light-content"/>
        <View style={styles.header}>
          
        <Text style={{fontSize:30, fontWeight:"bold",textAlign: 'center',color:'#fff', }}>MechSupp</Text>
        <Text style={{fontSize:20, fontWeight:"bold",textAlign: 'center', }}>A Mechanic Support App</Text>
            {/* <Text style={styles.text}>Welcome to MechSupp </Text> */}
        </View>
        
        <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig"
        >
        <View style={{ alignItems:"center"}}> 
         <Animatable.Image style={styles.logo1}
                animation="bounceIn"
                duraton="2500"
             //-----------------------I'll Bring my loop Here
             source={require('../assets/SP_logo1.png')}
            
            resizeMode="stretch"
            />

        
        <View style={{width: "100%", marginTop:40}}>
        <AppButton onClick={() => navigation.navigate('Login as Mechanic')} title="Signin as Mechanic" style={{ width: "80%" }} />
        </View>
        
        <View style={{width: "100%", marginTop:5}}>
        <AppButton onClick={() => navigation.navigate('Login as Customer')} title="Signin as Customer" style={{ width: "80%" }} />
        </View>
        
        </View>
         
        </Animatable.View>
        
        </View>

);
    
}

export default ChooseUserWhileLogin;



//--------------------------------------------------------------------------------------Styling
const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#0070FF',
    
  },
  header: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center'

    },
  footer: {
      flex: 3,
      backgroundColor: '#EBEBEB',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30,
      
    },
  logo: {
      width: 80,
      height: 80
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
    
      color: 'white',
      marginTop:5,
      textAlign:'left'
  },
  buton: {
        color:'#EBEBEB',  
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        padding:15,
        marginVertical:10,
        width:"100%",  
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  },
  containerr: {
    padding: 10,
  },
  logo1: {
    width: 180,
    height: 180
},
});


