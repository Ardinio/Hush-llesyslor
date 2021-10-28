import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../styles/Styles";
import { useState } from "react";
import { Badge } from "react-native-paper";

function ValueCarousel() {
  const [content, setContent] = useState(false);
  const number = [1, 2, 4, 6, 8];
  return (
    <View style={[ styles.marginTop]}>
      <TouchableOpacity onPress={() => setContent(!content)}>
        {content ? (
          <View>
            <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
              {number.map((n) => (
                <Badge
                  size={26}
                  style={[styles.itemText, styles.container]}
                >
                  {n}
                </Badge>
              ))}
            </ScrollView>
          </View>
        ) : (
          <View style={styles.CardContainer}>
            <Text>Värde:</Text>
            <Badge style={[styles.itemText]}>7</Badge>
            <View></View>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

export default ValueCarousel;
