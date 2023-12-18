import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import Text from "./Text";
import colors from "./config/colors"

function ProfileCard({ name, contact, image, onPress ,adress, cnic }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri:image}} />
        <View style={styles.detailsContainer}>
          
          <View style={styles.vewst}>
          <Text style={styles.title} numberOfLines={1}>
            {name}
          </Text>
          </View>

          <View style={styles.vewst}>
          <Text style={styles.subTitle} numberOfLines={2}>
            {contact}
          </Text>
          </View>
          
          <View style={styles.vewst}>
          <Text style={styles.subTitle} numberOfLines={2}>
            {cnic}
          </Text>
          </View>
          
          <View style={styles.vewst}>
          <Text style={styles.subTitle} numberOfLines={2}>
          {adress}
          </Text>
          </View>
        
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    marginBottom: 0,
    overflow: "hidden",
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    marginBottom:20,
   marginTop:20,
    height:120,
    width:120,
    borderRadius:60,
  },
  subTitle: {
    color: colors.secondary,
    fontFamily:'serif'
  },
  title: {
    // marginBottom: 7,
  },
  vewst: 
  {
    borderColor:'#060606',
    borderWidth:1,
    borderRadius:80,
    backgroundColor:'#fff',
    paddingLeft:20, 
    marginBottom:30,
    width:290,
    height:50,
    
    justifyContent:'center'
  }
});

export default ProfileCard;
