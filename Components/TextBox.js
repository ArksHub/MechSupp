import React from 'react'
import {View, TextInput, StyleSheet} from "react-native"
import { color } from 'react-native-reanimated'
import colors from './config/colors';

const styles = StyleSheet.create({
    container: {
        height: 42,
        width: "100%",
        borderRadius: 25,
        marginTop: 20,
        backgroundColor:colors.gray,
    },
    textInput: {
        marginTop: 0,
        width: "100%",
        height:50,
        borderColor: "#0B3270",
        borderWidth: 0,
        paddingLeft: 15,
        backgroundColor:colors.white,
    }

})

export default function Loginscreen(props){
    return <View style={styles.container}>
        <TextInput style={{...styles.container, ...styles.textInput}} {...props} />
    </View>
}