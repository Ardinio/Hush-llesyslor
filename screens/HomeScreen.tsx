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
import { AddUser } from "../store/user/userActions";

type Props = GenericScreenProps<"HomeScreen">;

function HomeScreen({ navigation }: Props) {
  const allHouseholds = useAppSelector(selectAllHouseholds);
  const dispatch = useAppDispatch();
  const allUsers = useAppSelector(selectAllUsers);

  const handleAdd = () => {
    dispatch(
      AddHousehold({ Id: 2, Name: "household 7", GeneratedCode: "123" })
    );
  };

  const handleAddUser = () => {
    dispatch(
      AddUser({ Id: 1,
        AccountId: 1,
        HouseholdId: 1,
        Name: "Emina",
        AvatarId: 2,
        IsOwner: true })
    );
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
      <Button
        buttonTitle="User"
        btnType="plus-circle"
        onPress={handleAddUser}
      />
      <Button
        buttonTitle="Household"
        btnType="plus-circle"
        onPress={handleAdd}
      />
    </View>
  );
}

export default HomeScreen;
