import React,{useEffect,useState} from 'react';
import { View,Text } from 'react-native-animatable';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import { FlatList, StyleSheet } from "react-native";
import { Button } from 'react-native';

import Card from "../Card";
import colors from "../config/colors";
import Screen from "../Screen";

const listings = [
    {
      id: 1,
      title: "Kashif Hussain",
      price: ":100Rs",
      image: require("../assets/bghome.jpg"),
    },
    {
      id: 2,
      title: "Zameer Ahmed",
      price: ":120Rs",
      image: require("../assets/1122.jpeg"),
    },
    {
        id: 3,
        title: "Ahmed Raza",
        price: ":300Rs",
        image: require("../assets/2233.jpeg"),
    },   

];
 function BookAppScreen(props,{navigation}) {
  const [posts, setPosts] = useState(null);
  const [loading, setloading] = useState(null);

  useEffect(() => { 
    const fetchposts = async() =>
    {
          try{
            const list=[];
           await firebase.firestore()
            .collection("tost") 
            .get()
            .then((querySnapshot) =>
                 {
                  //  console.log("Total Posts:" , querySnapshot.size);
                  querySnapshot.forEach(doc =>{
                    const {
                      userId=firebase.auth().currentUser.uid,
                      caption,
                      downloadURL,
                      creation,
                      contact,
                    } = doc.data();
//------------------------------------------------------------------------------------------------------------
// var t = new Date(creation);
//   var hours = t.getHours();
//   var minutes = t.getMinutes();
//   var newformat = t.getHours() >= 12 ? 'PM' : 'AM';  
  
//   // Find current hour in AM-PM Format 
//   hours = hours % 12;  
  
//   // To display "0" as "12" 
//   hours = hours ? hours : 12;  
//   minutes = minutes < 10 ? '0' + minutes : minutes; 
//   var formatted = 
//       (t.toString().split(' ')[0]) 
//       + ', ' +('0' + t.getDate()).slice(-2) 
//       + '/' + ('0' + (t.getMonth() + 1) ).slice(-2)
//       + '/' + (t.getFullYear())
//       + ' - ' + ('0' + t.getHours()).slice(-2)
//       + ':' + ('0' + t.getMinutes()).slice(-2)
//       + ' ' + newformat;
//--------------------------------------------------------------------------------------------------------------
                    
                    list.push({
                      id: doc.id,
                      userId,
                      creation: creation,
                      caption,
                      downloadURL,
                      contact,
                    });
                  })
                  
                  setPosts(list);

                  if (loading) {
                    setloading(false);
                  }
                  console.log("posts:", posts)
                 })   
             } catch(e){
                   console.log(e);
                      }
    }
          fetchposts();
  },[]);
   
  



  return (
        <Screen style={styles.screen}>
          <Text>Touch Any Banner to pass an order</Text>
      <FlatList showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
        data={posts}
        keyExtractor={(list) => list.id}
        renderItem={({ item }) => (
          <Card onPress={() => props.navigation.replace("first")} 
            caption={"Name:   " + item.caption}
            PostTime={"Contact:   "+item.contact}
            image={item.downloadURL}
          /> 
        )}
      />
   
    </Screen>
    );
}

export default BookAppScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});


