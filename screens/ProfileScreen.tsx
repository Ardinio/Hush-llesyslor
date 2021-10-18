import React from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import {
  List, Switch, Avatar, Button
} from 'react-native-paper';
import { FontAwesome5 } from "@expo/vector-icons";
import { setProfileName, setProfileAvatar } from "../store/profile/profileActions";
import { useAppDispatch, useAppSelector } from "../store/store";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ProfileScreen() {
  const dispatch = useAppDispatch();
    const name = useAppSelector(state => state.profile.name);

  const onSaveName = (name: string) => {
    dispatch(setProfileName(name));
}

const onSaveAvatar = (avatar: string) => {
  dispatch(setProfileAvatar(avatar));
}

  return (
    <View style={{ flex: 1 }}>
      <List.Item
                title="Dark Mode"
                left={() => <List.Icon icon="brightness-4" />}
                right={() => <Switch />}
            />
             <TouchableOpacity style={styles.avatarContainer}>
            <View style={styles.avatarWrapper}>
            <Avatar.Image size={60} source={require('../assets/chicken.png')}/>
            </View>
            </TouchableOpacity>
            <View style={styles.textInput}>
            <TextInput
                placeholder="Name"
                value={name}
                onChangeText={onSaveName}
            />
            </View>
      
    </View>
  );
}

export default ProfileScreen;


const styles = StyleSheet.create({
  avatarContainer: {
    marginTop: 70,
    marginLeft: 100,
    width: "50%",
    height: "30%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  avatarWrapper: {
    width: 170,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});
