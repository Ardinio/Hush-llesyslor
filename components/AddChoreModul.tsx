import * as React from "react";
import { View, Text, Alert, FlatList, Modal, TextInput } from "react-native";
import { styles } from "../styles/Styles";
import { Button } from "../components";
import { useState } from "react";
import RepeatCarousel from "./RepeatCarousel";
import ValueCarousel from "./ValueCarousel";

function AddChoreModul() {
  const [modalVisible, setModalVisible] = useState(false);
  const [complete, setComplete] = React.useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          <View style={styles.modalView2}>
            <Text>Skapa en ny syssla</Text>

            <View>
              <View>
                <View style={[styles.innerContainer, styles.marginTop]}>
                  <TextInput
                    style={styles.textBox}
                    placeholder="Titel"
                    placeholderTextColor="grey"
                    value={title}
                    onChangeText={(value) => setTitle(value)}
                  />
                  <Text style={styles.innerContainerText}></Text>
                </View>
              </View>

              <View style={styles.marginTop}>
                <View style={styles.innerContainer}>
                  <TextInput
                    style={styles.textBox}
                    placeholder="Beskrivning"
                    placeholderTextColor="grey"
                    value={title}
                    onChangeText={(value) => setTitle(value)}
                  />
                </View>
                <RepeatCarousel />
                <ValueCarousel />
              </View>
            </View>

            <View style={styles.marginTop}>
              <Button
                onPress={() => {
                  setComplete(!complete);
                }}
                buttonTitle="Färdig"
                btnType="check"
              />
              <View style={styles.marginTop}>
                <Button
                  onPress={() => setModalVisible(!modalVisible)}
                  buttonTitle="Stäng"
                  btnType="window-close"
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Button
        onPress={() => setModalVisible(!modalVisible)}
        buttonTitle="Lägg till uppgift"
        btnType="plus"
      />
    </View>
  );
}

export default AddChoreModul;
