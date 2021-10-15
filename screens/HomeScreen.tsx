import * as React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from '../styles/Styles';
import { useAppSelector, useAppDispatch } from '../store/store';
import { selectAllAccounts } from '../store/account/accountSelectors';
import { selectAllHouseholds } from '../store/household/householdSelector';

function HomeScreen() {
  const allAccounts = useAppSelector(selectAllAccounts);
  const allHouseholds = useAppSelector(selectAllHouseholds);
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    dispatch({type: 'household/addHousehold', payload: { Id: 1, Name: 'household 1', Code: '123'}})
    Alert.alert('Added new household');
  }

  const handlePrint = () => {
    Alert.alert('Print (see console)');
    // console.log('allAccountsSelector: ', allAccounts);
    console.log('allHouseholds: ', allHouseholds);
  }
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Household add" onPress={handleAdd}></Button>
      <Button title="Household print" onPress={handlePrint}></Button>
    </View>
  );
}

export default HomeScreen;
