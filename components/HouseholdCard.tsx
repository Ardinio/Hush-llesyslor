import * as React from "react";
import { FC } from "react";
import { View, Text } from "react-native";
import { Card, List } from "react-native-paper";
import { Household } from "../entities/Household";
import { User } from "../entities/User";
import { selectAllHouseholds } from "../store/household/householdSelectors";
import { useAppDispatch, useAppSelector } from "../store/store";
import { selectAllUsers } from "../store/user/userSelectors";
import { styles } from "../styles/Styles";

interface Props {
    household: Household;

}

const HouseholdCard = ({ household }: Props) => {
    
    return (
    <Card style={styles.Card}>
       
        <Text style={styles.title}>{household?.Name}</Text>
        <Text style={styles.italicFont}>Kod för att gå med i hushållet: {household?.GeneratedCode}</Text>
      
    </Card>
  );
};

export default HouseholdCard;
