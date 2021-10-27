import * as React from "react";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-paper";
import { AllAvatars } from "../data/avatars";
import { useAppSelector } from "../store/store";
import { styles } from "../styles/Styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HouseholdCard = ({}) => {
  const households = useAppSelector((state) => {
    return state.household.households.map((household) => {
      const users = state.user.users.filter(
        (u) => u.HouseholdId === household.Id
      );
      const usersWithAvatar = users.map((user) => {
        const avatar = AllAvatars.find((a) => a.Id === user?.AvatarId);
        return { ...user, avatar };
      });
      return { ...household, users: usersWithAvatar };
    });
  });

  return (
    //TODO: Check CSS to reuse several classes
    <View style={styles.container2}>
      {households.map(({ Name, users, GeneratedCode }, i) => (
        <Card key={i} style={styles.Card}>
          <View style={styles.textAlign}>
            <Text style={styles.title}>{Name}</Text>
            <TouchableOpacity
              onPress={() =>
                console.log("Ska modal öppnas här för att redigera hushåll? ")
              }
            >
              <MaterialCommunityIcons name="pencil" size={20} />
            </TouchableOpacity>
          </View>
          {users.map(({ Name, avatar, IsOwner }, i) => (
            <View key={i} style={styles.textAlign}>
              <Text>{avatar?.Emoji}</Text>
              <Text>{Name}</Text>
              <Text style={styles.descriptionText}>
                {IsOwner ? "(ägare)" : null}
              </Text>
            </View>
          ))}
          <Text style={styles.italicFont}>
            Kod för att gå med i hushållet: {GeneratedCode}
          </Text>
        </Card>
      ))}
    </View>
  );
};

export default HouseholdCard;
