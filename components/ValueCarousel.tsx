import * as React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "../styles/Styles";
import { FC, useState } from "react";
import { Badge } from "react-native-paper";

interface Props {
  onChangeText: (text: number) => void;
}

const ValueCarousel: FC<Props> = (props) => {
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
                  onPress={() => {
                    setEnergyRequired(n);
                    props.onChangeText(n);
                  }}
                  key={n}
                  size={50}
                  style={[
                    styles.itemText,
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
            <Badge style={[styles.itemText, styles.badge]}>
              {energyRequired}
            </Badge>
            <View></View>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ValueCarousel;
