import * as React from 'react';
import { View, Text, Alert } from 'react-native';
import { styles } from '../styles/Styles';
import { Button } from '../components';
import { GenericScreenProps } from '../navigation/AppStack';
import { useAppSelector, useAppDispatch } from '../store/store';
import { selectAllHouseholds } from '../store/household/householdSelectors';
import { AddHousehold } from '../store/household/householdActions';
import TaskCard from '../components/TaskCard';
import { ChartPie } from '../components/ChartPie';

type Props = GenericScreenProps<"HomeScreen">;


function HomeScreen() {
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
      <Button
        buttonTitle="Household"
        btnType="plus-circle"
        onPress={handleAdd}
      />
      <Button buttonTitle="Print" 
      btnType="print"
      onPress={handlePrint}
      />
      <ChartPie/>
    </View>
  );
}

export default HomeScreen;
