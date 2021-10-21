import * as React from "react";
import { FC } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import { Household } from "../entities/Household";
import { User } from "../entities/User";
import { selectAllHouseholds } from "../store/household/householdSelectors";
import { useAppDispatch, useAppSelector } from "../store/store";
import { selectAllUsers } from "../store/user/userSelectors";
import { styles } from "../styles/Styles";

interface Props {
    household: Household;
    user: User;

}

const HouseholdCard = ({ household }: Props) => {
    const allHouseholds = useAppSelector(selectAllHouseholds);
    const dispatch = useAppDispatch();
    const allUsers = useAppSelector(selectAllUsers);
  
  return (
    <Card style={styles.Card}>
       
        <Text style={styles.title}>{household?.Name}</Text>
      
    </Card>
  );
};

export default HouseholdCard;
