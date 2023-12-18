import React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';



const SettingsScreen = () => {



  const conatctMe = () => {
    Linking.openURL('https://github.com/Ark1011')
    
  }

  return (
    <View style={styles.container} >
        <Text style={{fontSize:22, marginBottom:10}}>App Developed by Team MechSupp</Text>
        <Button title="Contact US!" onPress={conatctMe} />
       
    </View>
  )
} 


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default SettingsScreen