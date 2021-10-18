import { StyleSheet } from "react-native";

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
    buttonText: {
        textAlign: "center",
        fontWeight: "600"
    },
    clickableText: {
        color: "steelblue",
        textAlign: "center",
        fontWeight: "600"        
    },
    modalView: {
        width: "70%",
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
})