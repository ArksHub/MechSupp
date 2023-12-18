import React,{useState} from 'react';
import {     View,     Text,     TouchableOpacity,     Dimensions,   StyleSheet,   StatusBar,    Image}  from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import SecondryButton from '../Buttons/SecondryButton';
import { KeyboardAvoidingView } from 'react-native';
import * as Yup from "yup";
import { ScrollView } from 'react-native-gesture-handler';
import TextBox from '../TextBox';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  person: Yup.string().required().label("Name"),
  phone: Yup.string().required().min(11).label("Phone"),
  CNIC: Yup.string().required().min(12).label("CNIC"),
});

function SignUpMech({navigation}) {
    const { colors } = useTheme();
    
   //-----------------------------------------My FireBase Auth
 
   const auth = firebase.auth;
   const firestore = firebase.firestore;
 
   const [values, setValues] = useState({
    name: "",
    role: "",
    email: "",
    phone:"",
    cnic:"",
    pwd: "",
    pwd2:""
})

function handleChange(text, eventName) {
    setValues(prev => {
        return {
            ...prev,
            [eventName]: text
        }
    })
}

function SignUp1() {

    const { email, pwd, pwd2, name, role, phone ,cnic } = values

    if (pwd == pwd2) {
      auth().createUserWithEmailAndPassword(email, pwd)
          .then((result) => { firebase.firestore().collection("Customer").doc(firebase.auth().currentUser.uid).set({email})}
          )
          .catch((error) => {
              alert(error.message)
              // ..
          });
  } else {
      alert("Passwords are different!")
  }
}

//--------------------------------------------------------------------------------------------------   
   
       return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#0070FF' barStyle="light-content"/>
        <View style={styles.header}>
          
        <Text style={{fontSize:30, fontWeight:"bold",textAlign: 'center',color:'#fff', }}>MechSupp</Text>
        <Text style={{fontSize:20, fontWeight:"bold",textAlign: 'center', }}>A Mechanic Support App</Text>

        </View>
        <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig"
        >

<KeyboardAvoidingView>
<ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={{ alignItems:"center"}}> 
        
        <TextBox placeholder="Email Address" keyboardType="email-address"   onChangeText={text => handleChange(text, "email")} />
        
        <TextBox placeholder="Password" onChangeText={text => handleChange(text, "pwd")} secureTextEntry={true} />
       
        <TextBox placeholder="Password" onChangeText={text => handleChange(text, "pwd2")} secureTextEntry={true} />
        
       
       
       
       
        <View style={{width: "100%", marginTop:20}}>
        <SecondryButton onClick={() => SignUp1()} title="SignUp" style={{ width: "80%" }} />
        </View>
         
    
        
        </View>
        </ScrollView>
        </KeyboardAvoidingView>






 {/* //==============================================================================================            */}
        </Animatable.View>

            {/* <AppButton title="Get Started"  onPress={() => navigation.navigate("Welcome")}> </AppButton> */}
        </View>
       
    );

}

export default SignUpMech;



//--------------------------------------------------------------------------------------Styling
const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#0070FF'
  },
  header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 3,
      backgroundColor: '#EBEBEB',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 10,
      paddingHorizontal: 20
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
});


