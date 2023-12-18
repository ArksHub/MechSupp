import React from 'react';
import {     View,     Text,     TouchableOpacity,     Dimensions,   StyleSheet,   StatusBar,    Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

import defaultStyles from '../config/styles';
import AppButton from '../Buttons/AppButton';


function sp_lash({navigation}) {
    const { colors } = useTheme();
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#0070FF' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
             //-----------------------I'll Bring my loop Here
            source={require('../assets/SP_logo1.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
        <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title, {
                color: colors.text
            }]}>Stay connected with MechSupp!</Text>
            
            <Text style={styles.text}>Sign in with account</Text>
           
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('Choose User')}>
                <LinearGradient
                    colors={['#fff', '#EBEBEB']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign,{ color:defaultStyles.colors.medium }]} >Get Started</Text>
                    
                </LinearGradient>
            </TouchableOpacity>
            
            </View>
        </Animatable.View>

            {/* <AppButton title="Get Started"  onPress={() => navigation.navigate("Welcome")}> </AppButton> */}
        </View>
       
    );

}

export default sp_lash;



//--------------------------------------------------------------------------------------Styling
const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#EBEBEB'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#0070FF',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'white',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
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
  }
});


