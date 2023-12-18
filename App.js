import 'react-native-gesture-handler'
import React, { useState,createContext }  from "react";

import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './Components/navigation/DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';

import BookingRequests from './Components/MecScreen/BookingRequests';
import splashScreen from './Components/Screens/splashScreen';
import LoginScreenCustomer from './Components/Screens/LoginScreenCustomer';
import LoginScreenMechanic from './Components/Screens/LoginScreenMechanic';
import SignUpScreen from './Components/Screens/SignUpScreen';
import HomeScreen from './Components/MecScreen/HomeScreen';
import ChooseUserWhileLogin from './Components/Screens/ChooseUserWhileLogin';
import Special_Offers from './Components/MecScreen/Special_Offers';
import AuthNavigator from './Components/navigation/AuthNavigator';
import SignUpMech from './Components/Screens/SignupMech';
import ViewBillings from './Components/MecScreen/ViewBillings';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import RealProfile from './Components/Screens/RealProfile';
import Profile from './Components/Screens/Profile';

import DrawerMech from './Components/navigation/DrawerMech';

import { LogBox } from 'react-native';
import ProfileMechanic from './Components/MecScreen/ProfileMechanic';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

//-----------------------------------------------------------------------------------------
const Stack= createStackNavigator();
export const AuthContext = createContext();

//------------------------------------------------------------------------------------------
function App(){

   const [isLoggedIn, setIsLoggedIn] = useState(false)

    const firebaseConfig = {
      apiKey: "",
      authDomain: "mechsupp-database.firebaseapp.com",
      projectId: "mechsupp-database",
      storageBucket: "mechsupp-database.appspot.com",
      messagingSenderId: "146096147116",
      appId: "1:146096147116:web:cb2c2f8c9e5b43c1676d09",
      measurementId: "G-VH9LZZDV9J"
    };

 //Checking if firebase has been initialized
   if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

   firebase.auth().onAuthStateChanged((user) => {
     if (user != null) {
       setIsLoggedIn(true)
     } else {
       setIsLoggedIn(false);
     }
     // Do other things
   });


    return ( 
     <NavigationContainer>
      
       {isLoggedIn ?  
        <Stack.Navigator>
        <Stack.Screen name="Main" options={{headerShown: false}} component={DrawerNavigator}/> 
        <Stack.Screen name="Book"  options={{headerShown: false}} component={DrawerNavigator}/>
        <Stack.Screen name="Nearby" options={{headerShown: false}} component={DrawerNavigator}/>
        <Stack.Screen name="Repair" options={{headerShown: false}} component={DrawerNavigator}/>
        <Stack.Screen name="Push" options={{headerShown: false}} component={DrawerNavigator}/> 
       
        <Stack.Screen name="home" options={{headerShown: false}} component={DrawerMech}/>
        <Stack.Screen name="Offers" options={{headerShown: false}} component={DrawerMech}/>
        <Stack.Screen name="first"  options={{headerShown: false}}component={DrawerMech}/>
        <Stack.Screen name="Billings" options={{headerShown: false}} component={DrawerMech}/>
        <Stack.Screen name="Repair Requests"  options={{headerShown: false}}component={DrawerMech}/>
      
      
        <Stack.Screen name="Profile" component={RealProfile}/>
        <Stack.Screen name="Edit Profile" component={Profile}/>
        <Stack.Screen name="Profile Mechanic" component={ProfileMechanic}/>
        </Stack.Navigator>
         : 
         <Stack.Navigator> 
          
        <Stack.Screen name="Get Started" component={splashScreen}/>
        <Stack.Screen name="Choose User"  component={ChooseUserWhileLogin}/>
        <Stack.Screen name="Login as Mechanic" component={LoginScreenCustomer}/>
        <Stack.Screen name="Login as Customer" component={LoginScreenMechanic}/>
        <Stack.Screen name="Register as Mechanic" component={SignUpScreen}/>
        <Stack.Screen name="Register as Customer" component={SignUpMech}/>
        </Stack.Navigator>
         }  

      
    </NavigationContainer>
 
    
  );
}
export default App;