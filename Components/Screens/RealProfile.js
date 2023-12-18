import React,{useEffect,useState} from 'react';
import { View,Text } from 'react-native-animatable';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import { FlatList, StyleSheet } from "react-native";
import 'firebase/compat/auth';

import ProfileCard from '../ProfileCard';
import colors from "../config/colors";
import Screen from "../Screen";
import secondaryButton from '../Buttons/SecondryButton';
import SecondryButton from '../Buttons/SecondryButton';

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
 function RealProfile(props,{navigation}) {
  const [posts, setPosts] = useState(null);
  const [loading, setloading] = useState(null);


  useEffect(() => { 
    const fetchposts = async() =>
    {
          try{
            const list=[];

           await firebase.firestore().collection("CustProfile").doc(firebase.auth().currentUser.uid).collection("UserProfile").get()
            .then((querySnapshot) =>
                 {
                  console.log("Total Posts:" , querySnapshot.size);
                  querySnapshot.forEach(doc =>{
                    
                    const {
                        downloadURL,
                        Name,
                        Contact,
                        CNIC,
                        Adress,
                        creation,
                    
                    } = doc.data();
         
                    list.push({
                      id: doc.id,
                      Name,
                      Contact,
                      CNIC,
                      Adress,
                      creation: creation,
                      downloadURL,
                      
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
          
      <FlatList showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
        data={posts}
        keyExtractor={(list) => list.id}
        renderItem={({ item }) => (
          <ProfileCard
            name={"Name :          " + item.Name}
            contact={"Phone :         " + item.Contact}
            image={item.downloadURL}
             cnic={"CNIC :            " + item.CNIC}
             adress={"Adress:          " + item.Adress}
          />
        )}
      />
    <SecondryButton title="Edit Profile" onClick={() => props.navigation.navigate('Profile')}></SecondryButton>
    </Screen>
    

    );
}

export default RealProfile;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});

