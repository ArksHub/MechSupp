import React from 'react';
import { View,StyleSheet} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableHighlight} from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from '../AppText';

function MainScreen({navigation}) {
  return (    
    <View>
    
    <View style={styles.txtmain}>
    <AppText style={{fontSize:40, fontWeight:"bold",textAlign: 'center'}}>
      Choose the service you require
    </AppText>
    </View>

    
{/* two of the views are wrapped inside this view ---------------------------------------------------*/}
    
    <View style={{ flexDirection: "row",flexWrap: "wrap",marginTop:35, justifyContent:"center"}}>
     
    <TouchableHighlight activeOpacity={0.4} underlayColor="#DDDDDD" onPressIn={()=> navigation.navigate('Book')}> 
    <View style={styles.v1}>
    <MaterialIcons name="home-repair-service" size={60} color="gray" />
    <AppText style={{fontSize:10,textAlign: 'center', fontWeight:"bold"}}>Book{"\n"}Appointment</AppText>
    </View>   
    </TouchableHighlight>

    <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => navigation.navigate('Nearby')}> 
    <View style={styles.v2}>
    <FontAwesome5 name="map-marked" size={60} color="gray" /> 
    <AppText style={{fontSize:10,textAlign: 'center', fontWeight:"bold"}}>Locate{"\n"}Mechanic</AppText>
    </View>
    </TouchableHighlight>

    </View>

{/* Other two views are wrapped inside this view ---------------------------------------------------*/}
    
    <View style={{ flexDirection: "row",flexWrap: "wrap", marginTop:15, justifyContent:"center",}}>
   
   {/* Here i'm using TouchableHighlight and its properties for styled response when pressed */}

    <TouchableHighlight activeOpacity={0.4} underlayColor="#DDDDDD" onPressIn={()=> navigation.navigate('Repair')}>
    <View style={styles.v3}>
    <MaterialCommunityIcons name="hammer-wrench" size={60} color="gray" />
    <AppText style={{fontSize:10,textAlign: 'center' , fontWeight:"bold"}}>Repair Vehicle</AppText>
    </View>
    </TouchableHighlight>
    
    <TouchableHighlight activeOpacity={0.4} underlayColor="#DDDDDD" onPressIn={()=> navigation.navigate('Push')}>
    <View style={styles.v4}>
    <FontAwesome5 name="people-carry" size={55} color="gray" /> 
    <AppText style={{fontSize:10,textAlign: 'center' , fontWeight:"bold"}}>Give Me A PushS</AppText>
    </View>
    </TouchableHighlight>
    
    </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
pv:
{
  backgroundColor:colors.dark,
   flex:1,
  flexDirection:'row',
  justifyContent: 'space-between',
},

txtmain:
{
  alignItems:"center",
  margin:10,
},

v1:
{
  backgroundColor:colors.white,
  width:100,
  height:120,
  alignItems:"center",
  elevation:10,
  marginRight:15,
  paddingTop:10,
  // Now For Ios shadow 
  padding:20,
  shadowColor: "#000000",
  shadowOpacity: 0.8,
  shadowRadius: 2,
  shadowOffset: {
    height: 1,
    width: 1
    }
},

v2:
{
  backgroundColor:colors.white,
  width:100,
  height:120,
  alignItems:"center",
  paddingTop:10,
  elevation:10,
   // Now For Ios shadow 
   padding:20,
   shadowColor: "#000000",
   shadowOpacity: 0.8,
   shadowRadius: 2,
   shadowOffset: {
     height: 1,
     width: 1
   }
  },
v3:
{
  backgroundColor:colors.white,
  width:100,
  height:120,
  alignItems:"center",
  marginRight:15,
  paddingTop:10,
  elevation:10,
 // Now For Ios shadow 
 padding:20,
 shadowColor: "#000000",
 shadowOpacity: 0.8,
 shadowRadius: 2,
 shadowOffset: {
   height: 1,
   width: 1
 }
},
v4:
{
  backgroundColor:colors.white,
  width:100,
  height:120,
  alignItems:"center",
  paddingTop:10,
  elevation:10,
 // Now For Ios shadow 
  padding:16,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
},
})

export default MainScreen;