import React,{useState} from 'react';
import { Image, View,StyleSheet,Text, Pressable, TouchableHighlight } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ActionButton from 'react-native-action-button';
import { Ionicons } from '@expo/vector-icons';
import 'firebase/compat/auth';
import HomeScreen from '../MecScreen/HomeScreen';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

import {
  InputField,
  InputWrapper,
  AddImage,
  SubmitBtn,
  SubmitBtnText,
  StatusWrapper,
} from '../stylesheets/styledprofile';
import AppText from '../AppText';
import colors from '../config/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as Yup from "yup";

function Profile(props,{navigation}) {
  // const avatarPlaceholderImg = require("")
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [post, setPost] = useState(null);
  const [Name, setName] =useState("");
  const [Contact, setContact] =useState("");
  const [CNIC, setCNIC] =useState("");
  const [Adress, setAdress] =useState("");
  
  const takePhotoFromCamera = async () => {
    // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    
      let source={uri: result.uri};
      console.log(source);
      setImage(source);
    
  };

//-----------------------------------------------------------------------------------------------------------
const childpath= `ProfileCust/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`;
     
     const submitPost = async () => {
       
       const response= await fetch(image.uri); //hogya 1
       const blob=await response.blob(); // 2
       const rref=firebase.storage().ref().child(childpath).put(blob);
       

       const taskCompleted = () => rref.snapshot.ref.getDownloadURL().then((snapshot) => {
        
        savePostData(snapshot);
        console.log(snapshot);
       
      })
      const taskerror= snapshot => { 
        console.log(snapshot)}


      rref.on("state_Changed" , taskCompleted,taskerror)   
     
      Alert.alert("Photo uploaded");
    };
   

 
const savePostData = (downloadURL) => { 
firebase.firestore()                                  
.collection("CustProfile").doc(firebase.auth().currentUser.uid).collection("UserProfile").add({ 
  downloadURL,
  Name,
  Contact,
  CNIC,
  Adress,
  creation: firebase.firestore.FieldValue.serverTimestamp() 
   })
  }



  return (
  <View style={styles.container}>
           
        <InputWrapper>
        <TouchableOpacity onPress={takePhotoFromCamera}> 
                   <Image source={image ? {uri: image.uri} : require('../assets/img.png')  }  style={styles.img} />
            </TouchableOpacity>
        <InputField
          placeholder="NAME!"
          numberOfLines={2}
          value={post}
          onChangeText={(Name) => setName(Name)}
          
        />
        <InputField
          placeholder="CONTACT NO:"
          numberOfLines={2}
          value={post}
          onChangeText={(Contact) => setContact(Contact)}
          
        />
        <InputField
          placeholder="CNIC"
          numberOfLines={2}
          value={post}
          onChangeText={(CNIC) => setCNIC(CNIC)}
        
        />
        <InputField
          placeholder="ADRESS"
          numberOfLines={2}
          value={post}
          onChangeText={(Adress) => setAdress(Adress)}
          />

          
          <SubmitBtn onPress={submitPost}>
            <SubmitBtnText>Save</SubmitBtnText>
          </SubmitBtn>
                   
        
          </InputWrapper>

          
  
 </View>
  );
}

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
img:
{
  marginBottom:20,
  marginTop:20,
  height:120,
  width:120,
  borderRadius:60,
}

})