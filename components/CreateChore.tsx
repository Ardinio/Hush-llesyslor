import * as React from "react";
import { StyleSheet } from "react-native";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";
import { styles } from "../styles/Styles";

const CreateChore = () => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return (
        <Provider>
            <Portal>
                <Modal 
                    visible={visible}
                    onDismiss={hideModal}
                    contentContainerStyle={style.container}
                >
                    {/*Add some information to play around with */}
                </Modal>
            </Portal>
            <Button style={styles.buttonContainer} onPress={showModal} >
                Lägg till ?ö
            </Button>
        </Provider>
    )
}

export default CreateChore;

const style = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 20,
    }
})