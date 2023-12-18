import React from 'react';
import { Text,StyleSheet, TouchableOpacity  } from 'react-native';



function AppButton(props) {
    return (
        //=======================================||=====================================
        //==Here I'm Overwriting button default \\// stylesheet i made bellow ===========
        
        <TouchableOpacity style={[styles.button, {}]} onPress={props.onClick}>
            <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
    );
}

export default AppButton;

const styles = StyleSheet.create({
    button:
    {
        backgroundColor:"#0070FF",
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        padding:15,
        marginVertical:10,
        width:"100%",
    },
    text:
    {
      color:'#fff',
      fontSize:18,
      textTransform:"uppercase",
      fontWeight:"bold",
    }
})