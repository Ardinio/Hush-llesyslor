import * as React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { styles } from '../styles/Styles';
import { useAppSelector, useAppDispatch } from '../store/store';
import { selectAllHouseholds } from '../store/household/householdSelectors';
import { AddHousehold } from '../store/household/householdActions';
import { GenericScreenProps } from '../navigation/AppStack';

type Props = GenericScreenProps<"HomeScreen">;

const HomeScreen = ({navigation}: Props) => {
  const allHouseholds = useAppSelector(selectAllHouseholds);
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    dispatch(AddHousehold({Id: 1, Name: 'household 1', GeneratedCode: '123'}));
    Alert.alert('Added new household');
  }

  const handlePrint = () => {
    Alert.alert('Print (see console)');
    console.log('allHouseholds: ', allHouseholds);
  }

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Statistics" onPress={() => navigation.navigate("StatisticsScreen")}/>
      <Button title="Household add" onPress={handleAdd}></Button>
      <Button title="Household print" onPress={handlePrint}></Button>
    </View>
  );
}

export default HomeScreen;
