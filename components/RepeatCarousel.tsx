import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../styles/Styles";
import { useState } from "react";
import { Badge } from "react-native-paper";

function RepeatCarousel() {
  const [content, setContent] = useState(false);
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <View style={[styles.carouselContainer, styles.marginTop]}>
      <TouchableOpacity onPress={() => setContent(!content)}>
        {content ? (
          <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
            {number.map((n) => (
              <Badge
                size={26}
                style={[styles.itemText, styles.container, styles.badge]}
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
}

export default RepeatCarousel;
