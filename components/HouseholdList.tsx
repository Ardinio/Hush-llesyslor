import * as React from "react";
import { Text, View } from "react-native";
import { Avatar } from "../entities/Avatar";
import { User } from "../entities/User";
import { useAppSelector } from "../store/store";
import { selectAllUsers } from "../store/user/userSelectors";
import { styles } from "../styles/Styles";

interface Props {
    allUsers: User;
    avatar: Avatar;
}

const HouseholdList = ({ allUsers, avatar }: Props) => {
    const users = useAppSelector(selectAllUsers);

    return (
        <>
        <View>
            <Text>{avatar.Path}{allUsers.Name}</Text> 
      </View>
      </>
  );
};

export default HouseholdList;
