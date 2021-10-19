import React from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput, Text } from 'react-native';
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
                title="Light Mode"
                left={() => <List.Icon icon="brightness-5" />}
                right={() => <Switch />}
            />
             <TouchableOpacity style={styles.avatarContainer}>
            <View style={styles.avatarWrapper}>
              <Text style={styles.icon}>🐶</Text>
            </View>
            </TouchableOpacity>
            <View style={styles.input}>
            <TextInput
                style={styles.textInput}
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
    marginLeft: 110,
    width: "45%",
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
  input: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
  },

  textInput: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    fontSize: 80,
    fontWeight: "bold",
    color: "black",
  },
});
