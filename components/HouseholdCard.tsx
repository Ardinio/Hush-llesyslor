import * as React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Card } from "react-native-paper";
import { Household } from "../entities/Household";
import { User } from "../entities/User";
import { useAppSelector } from "../store/store";
import { selectAllUsers } from "../store/user/userSelectors";
import { styles } from "../styles/Styles";
import HouseholdList from "./HouseholdList";

interface Props {
  household: Household;
}

const HouseholdCard = ({ household }: Props) => {
const user = useAppSelector(selectAllUsers);

    return (
    <Card style={styles.Card}>
      <Text style={styles.title}>{household?.Name}</Text>
      <View>
          <FlatList
            data={user}
            renderItem={({ item }) => (
                <>
                <HouseholdList 
                        allUsers={{
                            Id: item.Id,
                            AccountId: item.AccountID,
                            HouseholdId: item.HouseholdId,
                            Name: item.Name,
                            AvatarId: item.AvatarId,
                            IsOwner: item.IsOwner
                        }} avatar={{
                            Id: item.Path,
                            Path: undefined,
                            Color: ""
                        }}                />
                </>
            )}
            />

      <View>
    </View>
          </View>
      <Text style={styles.italicFont}>
        Kod för att gå med i hushållet: {household?.GeneratedCode}
      </Text>
    </Card>
  );
};

export default HouseholdCard;
