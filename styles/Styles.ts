import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
    text: {
        color: "#ffffff"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        marginTop: 50,
        width: "30%",
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
        fontSize: 22,
        fontWeight: "bold",
        color: "black",
        fontFamily: "Roboto_400Regular",
    },
})