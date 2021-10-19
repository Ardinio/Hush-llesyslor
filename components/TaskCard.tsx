import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/Styles";

const TaskCard = () => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
            <Text style={styles.itemText}>This is a task</Text>
            </View>
        </View>
    )
}

export default TaskCard;