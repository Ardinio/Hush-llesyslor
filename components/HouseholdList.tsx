import * as React from "react";
import { Text, View } from "react-native";
import { User } from "../entities/User";
import { useAppSelector } from "../store/store";
import { selectAllUsers } from "../store/user/userSelectors";
import { styles } from "../styles/Styles";

interface Props {
  allUsers: User;
}

const HouseholdList = ({ allUsers }: Props) => {
  const users = useAppSelector(selectAllUsers);

  return (
    <>
      <View>
      </View>
    </>
  );
};

export default HouseholdList;
