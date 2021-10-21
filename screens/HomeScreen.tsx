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
import HouseholdCard from "../components/HouseholdCard";
import { selectAllUsers } from "../store/user/userSelectors";

type Props = GenericScreenProps<"HomeScreen">;

function HomeScreen({ navigation }: Props) {
  const allHouseholds = useAppSelector(selectAllHouseholds);
  const dispatch = useAppDispatch();
  const allUsers = useAppSelector(selectAllUsers);

  const handleAdd = () => {
    dispatch(
      AddHousehold({ Id: 2, Name: "household 7", GeneratedCode: "123" })
    );
    Alert.alert("Added new household");
  };

  const handlePrint = () => {
    Alert.alert("Print (see console)");
    console.log("allHouseholds: ", allHouseholds);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={allHouseholds}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
              onPress={() => navigation.navigate("TaskScreen")}
            />
            <HouseholdCard
              household={{
                Id: item.Id,
                Name: item.Name,
                GeneratedCode: item.GeneratedCode,
              }}
            />
          </>
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
  );
}

export default HomeScreen;
