import React,{useState} from 'react';
import {     View,     Text,     TouchableOpacity,     Dimensions,   StyleSheet,   StatusBar,    Image, KeyboardAvoidingView}  from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import SecondryButton from '../Buttons/SecondryButton';

import TextBox from '../TextBox';
import Btn from '../Btn';

import * as Yup from "yup";
import Screen from "../Screen";
import AppForm from "../Form/AppForm";
import AppFormField from "../Form/AppFormField";
import SubmitButton from "../Form/SubmitButton";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import AppButton from '../Buttons/AppButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreenCustomer({navigation}) {
  
    const { colors } = useTheme();

//-----------------------------------------My FireBase Auth
    const [values, setValues] = useState({
      email: "",
      pwd: ""
  })

  function handleChange(text, eventName) {
      setValues(prev => {
          return {
              ...prev,
              [eventName]: text
          }
      })
  }

  function Login() {

      const { email, pwd } = values

      firebase.auth().signInWithEmailAndPassword(email, pwd)
          .then((userCredential) => {
            navigation.replace('home')
          })
          .catch((error) => {
              alert(error.message)
              // ..
          });
  }

//------------------------------------------------------------------Ends here
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
        <KeyboardAvoidingView> 
        <View style={{ alignItems:"center"}}> 
        <TextBox placeholder="Email Address" keyboardType="email-address"  textContentType="emailAddress" onChangeText={text => handleChange(text, "email")} />
        <TextBox placeholder="Password" onChangeText={text => handleChange(text, "pwd")} secureTextEntry={true} />
        <View style={{width: "100%", marginTop:20}}>
        <AppButton onClick={() => Login()} title="Login" style={{ width: "80%" }} />
        <SecondryButton onClick={() => navigation.navigate("Register as Mechanic")} title="Sign Up" />
        </View>
        
        
        </View>
        </KeyboardAvoidingView> 
        </Animatable.View>
        
        </View>






















     /* <Screen > 
     <KeyboardAvoidingView>
      <AppForm
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
          onChangeText={text => handleChange(text, "email")}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          onChangeText={text => handleChange(text, "pwd")}
        />
        <SubmitButton title="Login" onPress={()=> Login()} />
        <SecondryButton title="SignUp" onPress={()=> navigation.navigate('Register')}/>
      </AppForm>
      </KeyboardAvoidingView>
      </Screen> 
      </Animatable.View> 
            </View> */

    
    );
    
}

export default LoginScreenCustomer;



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
      justifyContent: 'center',
      alignItems: 'center'
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
});


