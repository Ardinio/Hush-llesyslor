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
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: 'center',
        flexWrap: "wrap",
    },
    itemText: {
        fontSize: 14,
        fontWeight: "bold",
    },
})

export default TaskCard;