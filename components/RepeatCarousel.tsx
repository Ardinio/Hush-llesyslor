import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../styles/Styles";
import { FC, useState } from "react";
import { Badge } from "react-native-paper";

interface Props {
  onChangeText: (text: number) => void;
}

const RepeatCarousel: FC<Props> = (props) => {
  const [content, setContent] = useState(false);
  const [reccurringInDays, setReccurringInDays] = useState<number>();

  const number = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <View style={[styles.carouselContainer, styles.marginTop]}>
      <TouchableOpacity onPress={() => setContent(!content)}>
        {content ? (
          <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
            {number.map((n) => (
              <Badge
                onPress={() => {
                  setReccurringInDays(n);
                  props.onChangeText(n);
                }}
                key={n}
                size={26}
                style={[
                  styles.itemText,
                  styles.container,
                  styles.badge,
                  reccurringInDays === n
                    ? styles.innerTextPressed
                    : styles.badge,
                ]}
              >
                {n}
              </Badge>
            ))}
          </ScrollView>
        ) : (
          <View style={styles.CardContainer}>
            <Text style={styles.carouselText}>Återkommer:</Text>
            <Text>var</Text>
            <Badge style={styles.itemText}>7</Badge>
            <Text>dag</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default RepeatCarousel;
