import * as React from "react";
import { View, Text, Alert, FlatList, Modal } from "react-native";
import { styles } from "../styles/Styles";
import { Button } from "../components";
import { useState } from "react";

function AddChoreModul() {
  const [modalVisible, setModalVisible] = useState(false);
  const [complete, setComplete] = React.useState(false);

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <View>
              <View>
                <Text style={styles.itemText}>Titel:</Text>
                <View style={styles.innerContainer}>
                  <Text style={styles.innerContainerText}></Text>
                </View>
              </View>

              <View style={styles.marginTop}>
                <Text style={styles.itemText}>Beskrivning:</Text>
                <View style={styles.innerContainer}>
                  <Text style={styles.innerContainerText}></Text>
                </View>
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
