import { createDrawerNavigator } from '@react-navigation/drawer';
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


import MainScreen from "../Screens/MainScreen";
import BookAppScreen from '../Screens/BookAppScreen';
import LoginScreen from '../Screens/LoginScreenCustomer';
import GiveMeAPushScreen from '../Screens/GiveMeAPushScreen';
import EMRepairVehicleScreen from '../Screens/EMRepairVehicleScreen';
import NearbyMechScreen from '../Screens/NearbyMechScreen';
import TriStackScreen from '../Screens/TriStackScreen';
import HomeScreen from '../MecScreen/HomeScreen';
import { View } from 'react-native-animatable';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Profile from '../Screens/Profile';
import RealProfile from '../Screens/RealProfile';

const Drawer = createDrawerNavigator();


function DrawerNavigator() {
  return (
     
    <Drawer.Navigator>
     <Drawer.Screen name="Main" component={MainScreen}
        options={{
           title: 'Main',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="md-home"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}
   />
      <Drawer.Screen name="RProfile"  component={RealProfile} style={{marginTop:100}}
      options={{
         title: 'Profile',
         drawerIcon: ({focused, size}) => (
            <Ionicons
            name="log-out" size={size}  color={focused ? '#7cc' : '#ccc'} />
            
         ),
      }}
      />
     <Drawer.Screen name="Profile"  component={Profile} style={{marginTop:100}}
      options={{
         title: 'Edit Profile',
         drawerIcon: ({focused, size}) => (
            <Ionicons
            name="log-out" size={size}  color={focused ? '#7cc' : '#ccc'} />
            
         ),
      }}
      />
    
   <Drawer.Screen name="Book" component={BookAppScreen}
        options={{
           title: 'Book Mechanic',
           drawerIcon: ({focused, size}) => (
            <MaterialIcons name="home-repair-service"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}
   />
    <Drawer.Screen name="Nearby" component={NearbyMechScreen}
        options={{
           title: 'Find Nearby Mechanic',
           drawerIcon: ({focused, size}) => (
            <MaterialIcons name="map"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}
   />
   <Drawer.Screen name="Repair" component={EMRepairVehicleScreen}
        options={{
           title: 'Instant Vehicle Repair',
           drawerIcon: ({focused, size}) => (
              
            <Ionicons name="car-sport" 
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}
   />
   <Drawer.Screen name="Push" component={GiveMeAPushScreen}
        options={{
           title: 'Need a Push',
           drawerIcon: ({focused, size}) => (
            <FontAwesome5 name="people-carry"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}
   />
     {/* <Drawer.Screen name="home" component={HomeScreen}
        options={{
           title: 'Experimental Mechanic Panel',
           drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons name="thought-bubble"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}
   /> */}
     
      <Drawer.Screen name="Log Out"  component={TriStackScreen} style={{marginTop:100}}
      options={{
         title: 'Log Out',
         drawerIcon: ({focused, size}) => (
            <Ionicons
            name="log-out" size={size}  color={focused ? '#7cc' : '#ccc'} />
            
         ),
      }}
      />





    </Drawer.Navigator>


  );
}
export default DrawerNavigator;