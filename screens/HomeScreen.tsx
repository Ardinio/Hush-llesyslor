import * as React from 'react';
import { View, Text, Alert, FlatList } from 'react-native';
import { styles } from '../styles/Styles';
import { Button } from '../components';
import { GenericScreenProps } from '../navigation/AppStack';
import { useAppSelector, useAppDispatch } from '../store/store';
import { selectAllHouseholds } from '../store/household/householdSelectors';
import { AddHousehold } from '../store/household/householdActions';
import TaskCard from '../components/TaskCard';
import { TouchableRipple } from 'react-native-paper';
import { tasks } from '../data/taskData';

type Props = GenericScreenProps<"HomeScreen">;

function HomeScreen({ navigation }: Props) {
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
     <FlatList
        data={tasks}
        renderItem={({ item }: any) => (
            <TaskCard
              task={item}
            />
        )}
      />



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
    </View>
  );
}

export default HomeScreen;
