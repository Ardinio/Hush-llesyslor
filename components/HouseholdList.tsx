import * as React from "react";
import { Text, View } from "react-native";
import { User } from "../entities/User";
import { useAppSelector } from "../store/store";
import { selectAllUsers } from "../store/user/userSelectors";
import { styles } from "../styles/Styles";

const HouseholdList = () => {
  const households = useAppSelector((state) => {
    return state.household.households.map((household) => {
      const user = state.user.users.find((u) => u.HouseholdId === household.Id);
      return { household, user };
    });
  });

  return (
    <>
      <View>
        {households.map(({ user, household }, i) => (
          <View key={i}>
            <Text>{user?.Name}</Text>
            <Text>{household.GeneratedCode}</Text>
          </View>
        ))}
      </View>
    </>
  );
};

export default HouseholdList;
