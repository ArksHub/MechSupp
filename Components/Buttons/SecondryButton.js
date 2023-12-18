import React from 'react';
import { Text,StyleSheet, TouchableOpacity  } from 'react-native';


// I used it only in signUp Form where i changed the color of my Button
function SecondryButton(props) {
    return (
        //=======================================||=====================================
        //==Here I'm Overwriting button default \\// stylesheet i made bellow ===========
        
        <TouchableOpacity style={[styles.button, {}]} onPress={props.onClick}>
            <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
    );
}

export default SecondryButton;

const styles = StyleSheet.create({
    button:
    {
        backgroundColor:"#fff",
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        padding:15,
        marginVertical:10,
        width:"100%",
    },
    text:
    {
      color:'#0070FF',
      fontSize:18,
      textTransform:"uppercase",
      fontWeight:"bold",
    }
})