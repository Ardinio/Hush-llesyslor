import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
  },
  root: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 30,
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
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemText: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 4,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
    fontFamily: "Roboto_400Regular",
  },
  buttonsContainer: {
    bottom: 0,
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "transparent",
    marginTop: 5,
    width: "100%",
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
    width: "90%",
    minHeight: 220,
    margin: 20,
    backgroundColor: "#EEEDE7",
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
    color: "#000000",
    fontFamily: "Roboto_400Regular",
  },
  buttonContainer: {
    width: 130,
    height: height / 15,
    padding: 10,
    flexDirection: "row",
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.1)",
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
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    fontFamily: "Roboto_400Regular",
  },
  Card: {
    width: 300,
    height: "auto",
    marginTop: 10,
    padding: 8,
  },
  CardContainer: {
    flexDirection: "row",
    margin: 15,
    justifyContent: "space-between",
  },
  CardItem: {
    flexDirection: "row"
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  italicFont: {
    fontStyle: "italic",
    marginTop: 5,
  },
  picker: {
    width: 200,
    padding: 5,
    margin: 5,
  },
  textAlign: {
    flexDirection: "row",
  },
  descriptionText: {
    marginLeft: 15,
    fontStyle: "italic",
  },
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pieChartStyle: {
    height: 150,
    width: 150,
  },
  pieChartStyleBig: {
    height: 200,
    width: 200,
  },
  pieChartContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
  },
  pieShartTaskContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  pieShartTaskContainerText: {
    textAlign: "center",
  },
  statisticsScreenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  marginTop: {
    marginTop: 10,
  },
  innerContainer: {
    backgroundColor: "#ffff",
    borderRadius: 10,
    height: 50,
    width: 280,
  },
  innerContainerText: {
    marginTop: 10,
    marginLeft: 8,
  },
  textInputBox: {
    marginTop: 8,
    marginLeft: 8,
  },
  carouselContainer: {
    backgroundColor: "#ffff",
    borderRadius: 10,
    height: 50,
    width: 280,
  },
  badge: {
    backgroundColor: "#EEEDE7",
    justifyContent: "center",
  },
  carouselText: {
    fontWeight: "bold",
  },
  innerTextPressed: {
    color: "black",
    fontWeight: "bold",
    backgroundColor: "red",
  },
  profileAvatar: {
    borderRadius: 110,
    width: 220,
    height: 220,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  bigFont: {
    fontSize: 30,
  },
  buttonPositionAbsolute: {
    position: "absolute",
  },
  textOk: {
    color: "#00ff00"
  },
  textBad: {
    color: "#ff0000"
  }
});
