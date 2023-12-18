import React from 'react';
import { View,Image,Text } from 'react-native';
import { StyleSheet } from 'react-native';
import AppText from '../AppText';
function ViewBillings(props) {
    return (
        <View>
            <Image style={styles.img}source={require('../assets/images-removebg.png')} />
            <AppText style={styles.text}>Will Be Operational In the Future</AppText>
        </View>
    );
}

export default ViewBillings;

const styles = StyleSheet.create({
img:
{
marginTop:160,
marginLeft:33
},
text:
{
marginLeft:45
}
});