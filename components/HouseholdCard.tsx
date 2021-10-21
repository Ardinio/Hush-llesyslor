import * as React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import { Household } from "../entities/Household";
import { styles } from "../styles/Styles";

interface Props {
  household: Household;
}

const HouseholdCard = ({ household }: Props) => {
  return (
    <Card style={styles.Card}>
      <Text style={styles.title}>{household?.Name}</Text>
      <Text style={styles.italicFont}>
        Kod för att gå med i hushållet: {household?.GeneratedCode}
      </Text>
    </Card>
  );
};

export default HouseholdCard;
