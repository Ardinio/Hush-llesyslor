import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Card } from "react-native-paper";
import { selectAllHouseholds } from "../store/household/householdSelectors";
import { useAppSelector } from "../store/store";
import { styles } from "../styles/Styles";

const HouseholdCard = ({}) => {
  const allHouseholds = useAppSelector(selectAllHouseholds);
  const households = useAppSelector((state) => {
    return state.household.households.map((household) => {
      const user = state.user.users.find((u) => u.HouseholdId === household.Id);
      return { household, user };
    });
  });

  return (
    <View>
      {households.map(({ household, user }, i) => (
        <Card key={i} style={styles.Card}>
          <Text style={styles.title}>{household?.Name}</Text>
          <View>
            <Text>{user?.Name}</Text>
          </View>

          <Text style={styles.italicFont}>
            Kod för att gå med i hushållet: {household?.GeneratedCode}
          </Text>
        </Card>
      ))}
    </View>
  );
};

export default HouseholdCard;
