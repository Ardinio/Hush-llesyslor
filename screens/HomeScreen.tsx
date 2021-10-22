import * as React from "react";
import { View, Text, Alert, FlatList } from "react-native";
import { styles } from "../styles/Styles";
import { Button } from "../components";
import { GenericScreenProps } from "../navigation/RootNavigator";
import { useAppSelector, useAppDispatch } from "../store/store";
import { selectAllHouseholds } from "../store/household/householdSelectors";
import { AddHousehold } from "../store/household/householdActions";
import TaskCard from "../components/TaskCard";
import { TouchableRipple } from "react-native-paper";
import { tasks } from "../data/taskData";
import { TouchableHighlight as TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
    <SafeAreaProvider>
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }: any) => (
          <TouchableOpacity
            onPress={() =>
              console.log(item, "öppna modul för att läsa mer om tasken")
              
            }
            underlayColor='none'
          >
            <TaskCard 
            task={item} />
          </TouchableOpacity>
        )}
      />

      <Text>Home Screen</Text>
      <Button
        buttonTitle="Household"
        btnType="plus-circle"
        onPress={handleAdd}
      />
      <Button buttonTitle="Print" btnType="print" onPress={handlePrint} />
    </View>
    </SafeAreaProvider>
  );
}

export default HomeScreen;
