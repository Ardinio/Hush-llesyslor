import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    text: {
        color: "#ffffff"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
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