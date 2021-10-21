import * as React from "react";
import { View, Text, Alert, FlatList } from "react-native";
import { styles } from "../styles/Styles";
import { Button } from "../components";
import { GenericScreenProps } from "../navigation/AppStack";
import { useAppSelector, useAppDispatch } from "../store/store";
import { selectAllHouseholds } from "../store/household/householdSelectors";
import { AddHousehold } from "../store/household/householdActions";
import TaskCard from "../components/TaskCard";
import { TouchableRipple } from "react-native-paper";
import { tasks } from "../data/taskData";
import { TouchableHighlight as TouchableOpacity } from "react-native-gesture-handler";

type Props = GenericScreenProps<"HomeScreen">;

function HomeScreen({ navigation }: Props) {
  const allHouseholds = useAppSelector(selectAllHouseholds);
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    dispatch(
      AddHousehold({ Id: 1, Name: "household 1", GeneratedCode: "123" })
    );
    Alert.alert("Added new household");
  };

  const handlePrint = () => {
    Alert.alert("Print (see console)");
    console.log("allHouseholds: ", allHouseholds);
  };
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      
      <View style={styles.buttonsContainer}>
        <Button
          buttonTitle="Household"
          btnType="plus-circle"
          onPress={handleAdd}
        />

        <Button buttonTitle="Print" btnType="print" onPress={handlePrint} />
      </View>
    </View>
  );
}

export default HomeScreen;
