import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
    text: {
        color: "#ffffff"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
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
        marginLeft: 10,
    },
    inputContainer: {
        justifyContent: "center",
        width: width / 1.1,
        alignSelf: "center",
        marginVertical: 10,
    },
    inputText: {
        width: "95%",
        marginLeft: 10,
        marginTop: 50,
        height: height / 13,
        padding: 10,
        flexDirection: "row",
        borderRadius: 10,
        fontSize: 18,
        color: '#000000',
        fontFamily: "Roboto_400Regular"
    },
    buttonContainer: {
        marginTop: 50,
        width: "35%",
        height: height / 15,
        padding: 10,
        flexDirection: "row",
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },
    },
    iconWrapper: {
        width: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: 85,
        color: "black",
        marginLeft: 65,
    },

    btnTxtWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        fontFamily: "Roboto_400Regular",
    },
    Card: {
        width: 300,
        height: 50,
        marginTop: 10,
    },
    CardContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        margin: 15,
    }
})