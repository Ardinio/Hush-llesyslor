import * as React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import { AllAvatars } from "../data/avatars";
import { useAppSelector } from "../store/store";
import { styles } from "../styles/Styles";

const HouseholdCard = ({}) => {
  const households = useAppSelector((state) => {
    return state.household.households.map((household) => {
      const user = state.user.users.find((u) => u.HouseholdId === household.Id);
      const userAvatar = AllAvatars.find((u) => u.Id === user?.AvatarId);
      return { household, user, userAvatar };
    });
  });

  return (
    <View>
      {households.map(({ household, user, userAvatar }, i) => (
        <Card key={i} style={styles.Card}>
          <Text style={styles.title}>{household?.Name}</Text>
          <View style={styles.textAlign}>
            <Text>{userAvatar?.Emoji}</Text>
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
