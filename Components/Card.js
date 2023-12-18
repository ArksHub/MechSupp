import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import { Button } from "react-native";
import Text from "./Text";
import colors from "./config/colors"

function Card({ caption, PostTime, image, onPress,}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri:image}} />
        <View style={styles.detailsContainer}>
          <Text style={styles.subTitle} numberOfLines={1}>
            {caption}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {PostTime} 
          </Text>
          
        </View>
      </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
