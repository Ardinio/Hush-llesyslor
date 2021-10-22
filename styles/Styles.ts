import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("screen");

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
    buttonsContainer: {
        bottom: 10,
        justifyContent: "space-around",
        flexDirection: "row",
        backgroundColor: "transparent",
        position: 'absolute',
        width: "100%"
      },
    errorText: {
        color: "red",
        fontSize: 12,
    },
    clickableText: {
        color: "steelblue",
        textAlign: "center",
        fontWeight: "600",
        paddingBottom: 10,    
    },
    modalView: {
        width: "70%",
        minHeight: 200,
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
      textInputModal: {
        width: 200,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        padding: 5,
        margin: 5,
      },
      loginLogo: {
        marginTop: 20,
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
        borderWidth: 1,
        borderColor: "black",
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
    pieChartStyle: {
        height: 200, 
        width: 200,
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
    },
    picker: {
        width: 200,
        padding: 5,
        margin: 5,
      },
})