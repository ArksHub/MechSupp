import { createDrawerNavigator } from '@react-navigation/drawer';
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import ViewBillings from '../MecScreen/ViewBillings';
import HomeScreen from '../MecScreen/HomeScreen';
import TriStackScreen from '../Screens/TriStackScreen';
import { MaterialIcons } from '@expo/vector-icons';

import Special_Offers from '../MecScreen/Special_Offers';
import BookingRequests from '../MecScreen/BookingRequests';
import RepairRequests from '../MecScreen/RepairRequests';
import ProfileMechanic from '../MecScreen/ProfileMechanic';
import EditProfile from '../MecScreen/EditProfile';
const Drawer = createDrawerNavigator();


function DrawerMech() {
  return (
     
    <Drawer.Navigator>
     <Drawer.Screen name="home" component={HomeScreen}
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
   <Drawer.Screen name="Profile Mechanic" component={ProfileMechanic}
        options={{
           title: 'Profile Mechanic',
           drawerIcon: ({focused, size}) => (
              
            <Ionicons name="car-sport" 
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}
   />
   <Drawer.Screen name="Edit Profile" component={EditProfile}
        options={{
           title: 'Edit Profile',
           drawerIcon: ({focused, size}) => (
              
            <Ionicons name="car-sport" 
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}
   />
    <Drawer.Screen name="first" component={BookingRequests}
        options={{
           title: 'Booking Requests',
           drawerIcon: ({focused, size}) => (
              
            <Ionicons name="car-sport" 
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}
   />
    <Drawer.Screen name="Billings" component={ViewBillings}
        options={{
           title: 'Billings',
           drawerIcon: ({focused, size}) => (
            <MaterialIcons name="home-repair-service"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}
   />
    <Drawer.Screen name="Repair Requests" component={RepairRequests}
        options={{
           title: 'Repair Requests',
           drawerIcon: ({focused, size}) => (
              
            <Ionicons name="car-sport" 
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}
   />
    <Drawer.Screen name="Offers" component={Special_Offers}
        options={{
           title: 'Create Service Banner',
           drawerIcon: ({focused, size}) => (
            <MaterialIcons name="map"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              />
           ),
        }}
   />
   
  
   
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
export default DrawerMech;