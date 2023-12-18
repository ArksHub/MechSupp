import React, {useState, useEffect} from 'react';
import {  Platform,View, AppState, StyleSheet, Text, ScrollView, RefreshControl, Dimensions } from 'react-native';
import NearbyScreen from './NearbyScreen'
import SearchScreen from './SearchScreen'


import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import {connect} from 'react-redux';
import {addLocation, removeLocation,  locationError, noLocationError} from '../redux/actions'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const Tab = createMaterialTopTabNavigator();
const {height} = Dimensions.get('window')

let isMounted;
const HomeScreen = ({addLocation, removeLocation, userLocation, locationError, noLocationError, locationErr }) => {
    const [errorMessage, setErrorMessage] = useState(null) 
    const [appState, setAppState] = useState(AppState.currentState) 
    const [loading, setLoading] = useState(true)
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        isMounted = true;
        AppState.addEventListener('change', handleAppStateChange)
        if (Platform.OS === 'android' && !Constants.isDevice) {
            {isMounted ? setErrorMessage(
              'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            ): undefined}
          } else {

            
            async function runAsync(){
              await _getLocationAsync()
            } 
            runAsync()

          }


        return (() => {
            isMounted = false;
            AppState.removeEventListener('change', handleAppStateChange)
            removeLocation()
        })
    }, [])

    const onRefresh = React.useCallback(async () => {
      setRefreshing(true);
      await _getLocationAsync()

    }, [refreshing]);

    const handleAppStateChange = async(nextAppState) => {
        if (
            appState.match(/inactive|background/) &&
            nextAppState === 'active'
          ) {
            console.log('App has come to the foreground!');
            await _getLocationAsync();
          }
          // {isMounted ? setAppState(nextAppState) : undefined};
          setAppState(nextAppState);
        }

    const _getLocationAsync = async () => {
      try{
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          locationError('Permission to access location was denied')
          setLoading(false)
          setRefreshing(false)
          return
        }
        
        let thisLocation = await Location.getCurrentPositionAsync({});
        addLocation(thisLocation)
        noLocationError()
        setRefreshing(false)
        setLoading(false)
        
      }
      catch(err)
      {
        let status = await Location.getProviderStatusAsync()
        if (!status.locationServicesEnabled)
        {
          locationError('Location is Disabled, Please enable the location and pull down to reload the app!')
          setLoading(false)
        }
        setRefreshing(false)
      }
      };


    let text = 'Waiting..';
    if (errorMessage) {
      text = errorMessage;
    } else if (userLocation) {
      text = JSON.stringify(userLocation);
    }

    return (

      <View style={styles.container}>
        {loading? <Text>Loading...</Text> :
        locationErr.error ?
        <ScrollView 
        style={{ height: height}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
          <View
          style={{flex:1, alignItems: 'center', justifyContent: 'center', height: height}}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>{locationErr.errMsg}</Text> 
          </View>
        </ScrollView>
        :
        <MyTabs 
        _getLocationAsync={_getLocationAsync}
        /> 
        }
      </View>

    )
} 


const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 5,
  }
})


function MyTabs(props) {
  return (

    <Tab.Navigator
      lazy={true}
      swipeEnabled={false}>
      <Tab.Screen name="Nearby">
        {navigationProps => 
            <NearbyScreen 
                {...navigationProps}
                getLocation={props._getLocationAsync}
            />
        } 
      </Tab.Screen>
      <Tab.Screen name="Search">
        {navigationProps => 
            <SearchScreen 
                {...navigationProps}
                getLocation={props._getLocationAsync}
            />
        }
      </Tab.Screen>
    </Tab.Navigator>
  );
}



  const mapStateToProps = (state) =>{
      return {
          userLocation: state.mapReducer,
          locationErr: state.locationErr
      }
  }
  export default connect(mapStateToProps, {removeLocation, addLocation, locationError, noLocationError})(HomeScreen);  





















































































// import React from 'react';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import {GOOGLE_MAPS_APIKEY} from "@env";
// import { View } from 'react-native-animatable';
// import { StyleSheet } from 'react-native';
// import MapView from 'react-native-maps';
// import { Text } from 'react-native-animatable';

// function MainScreen(props) {
//   return (

//      <View styles={{
//       container:
//       {

//         backgroundColor:'#FFA500',
//         flex:1,
//         border:20,
//         paddingTop:200,
//       },
//       textInput:
//       {
//         fontSize:18, 
//       }
//     }}>
//     <GooglePlacesAutocomplete
//     nearbyPlacesAPI="GooglePlacesSearch"
//     debounce={400}
//     placeholder="where from"
    
//     enablePoweredByContainer={false}
//     minLength={2}
//     query={{
//       key:GOOGLE_MAPS_APIKEY, language:"en",
//     }}
//     onPress={(data,details=null) => {
// console.log(data);
// console.log(details);
//     }}
//     fetchDetails={true}
//     returnKeyType={"Search"}
//     />
    
//     </View> 
//     // <MapView
    // style={styles.map}
    // initialRegion={{
    //   latitude: 30.375321,
    //   longitude: 69.345116,
    //   latitudeDelta: 0.0922,
    //   longitudeDelta: 0.0421,
    // }}
    // />
    
  // );
// }

// export default MainScreen;

// const styles = StyleSheet.create({
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });