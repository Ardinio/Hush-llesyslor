import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TaskCard = () => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
            <Text style={styles.itemText}>This is a task</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: 'center',
        flexWrap: "wrap"
    },
    itemText: {
        fontSize: 14,
    },
})

export default TaskCard;