import React, {useState, useContext} from 'react';
import { View,StyleSheet,Text,Platform, Alert, ActivityIndicator,Image} from 'react-native';
import ActionButton from 'react-native-action-button';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import 'firebase/compat/auth';
import SignUpMech from '../Screens/SignupMech';
import { StackActions } from '@react-navigation/native';
const popAction = StackActions.pop(1);


import {
  InputField,
  InputWrapper,
  AddImage,
  SubmitBtn,
  SubmitBtnText,
  StatusWrapper,
} from '../stylesheets/StylesAddpost';

import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import { NativeScreenContainer } from 'react-native-screens';
import HomeScreen from './HomeScreen';
import { getTimestamp } from 'react-native-reanimated/lib/reanimated2/core';


//--------------- -------------------------------------------------------------------------------
export default function Special_Offers (props,{navigation}) {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [post, setPost] = useState(null);
  const [caption, setCaption] =useState("");
  const [contact, setContact] =useState("");
    
    

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
       const choosePhotoFromLibrary = async () => {
      // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      let source={uri: result.uri};
      console.log(source);
        setImage(source);
      
    };
    
     const childpath= `post/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`;
     
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
.collection("tost").add({ 
  downloadURL,
  caption,
  contact,
  creation: firebase.firestore.FieldValue.serverTimestamp()
   }).then((function()
   { props.navigation.popToTop(HomeScreen)})) 
  }

      
//-------------------------------------------------------------------------------------------
    return (
        <View style={styles.container}>
        <InputWrapper>
        {image && <Image source={{uri: image.uri }} style={{ width: 300, height: 200 }} />}
        <InputField
          placeholder="Name"
          multiline
          numberOfLines={4}
          value={post}
          onChangeText={(caption) => setCaption(caption)}
        />
        <InputField
          placeholder="Contact No"
          multiline
          numberOfLines={4}
          value={post}
          onChangeText={(contact) => setContact(contact)}
        />
          <SubmitBtn onPress={submitPost}>
            <SubmitBtnText>Post</SubmitBtnText>
          </SubmitBtn>  
          
          </InputWrapper>
         
       <ActionButton buttonColor="#2e64e5">
        <ActionButton.Item
          buttonColor="#9b59b6"
          title="Take Photo"
          onPress={takePhotoFromCamera}>
          <Ionicons name="camera-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
       
        <ActionButton.Item
          buttonColor="#3498db"
          title="Choose Photo"
          onPress={choosePhotoFromLibrary}>
          <Ionicons name="md-images-outline" style={styles.actionButtonIcon} />
         </ActionButton.Item>
      
        </ActionButton>
        </View>
    );
}

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
  });