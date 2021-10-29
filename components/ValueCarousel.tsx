import * as React from "react";
import { View, Text, ScrollView, ColorPropType } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../styles/Styles";
import { FC, useState } from "react";
import { Badge } from "react-native-paper";

interface Props {
  onChangeText: (text: string) => void;
}

const ValueCarousel: FC<Props> = () => {
  const [content, setContent] = useState(false);
  const [energyRequired, setEnergyRequired] = useState<any>();

  const number = [1, 2, 4, 6, 8];

  return (
    <View style={[styles.carouselContainer, styles.marginTop]}>
      <TouchableOpacity onPress={() => setContent(!content)}>
        {content ? (
          <View>
            <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
              {number.map((n) => (
                <Badge
                  onPress={() => setEnergyRequired(n)}
                  key={n}
                  size={26}
                  style={[
                    styles.itemText,
                    styles.container,
                    styles.badge,
                    energyRequired === n
                      ? styles.innerTextPressed
                      : styles.badge,
                  ]}
                >
                  {n}
                </Badge>
              ))}
            </ScrollView>
          </View>
        ) : (
          <View style={styles.CardContainer}>
            <Text style={styles.carouselText}>Värde:</Text>
            <Badge style={[styles.itemText, styles.badge]}>7</Badge>
            <View></View>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ValueCarousel;
