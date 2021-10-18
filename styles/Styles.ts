import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
    text: {
        color: "#ffffff"
    },
    root: {
        flex: 1,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonsContainer: {
        bottom: 10,
        justifyContent: "space-around",
        flexDirection: "row",
        backgroundColor: "transparent",
        position: 'absolute',
        width: "100%"
      },
    button: {
        backgroundColor: "#8E9080",
        padding: 2,
        margin: 2,
        borderRadius: 20,
        width: "50%"
    },
    // buttonText: {
    //     textAlign: "center",
    //     fontWeight: "600"
    // },
    clickableText: {
        color: "steelblue",
        textAlign: "center",
        fontWeight: "600",
        paddingBottom: 10,    
    },
    modalView: {
        width: "70%",
        height: 200,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      textInputBox: {
        width: 200,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        padding: 5,
        margin: 5,
      },
      loginLogo: {
        marginTop: 50,
        marginBottom: 50,
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
})