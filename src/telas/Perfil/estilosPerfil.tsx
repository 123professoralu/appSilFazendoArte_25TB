import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  cardContainer: {
    marginTop: 20,
    backgroundColor: 'lightgray',
    width: '80%',
    alignSelf: 'center',
  },
  camera: {
    width: '50%',
    height: '25%',
    alignSelf: 'center',
    borderRadius: '10',
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  cameraVirarBotao: {
    position: 'absolute',
    bottom: 10,
    left: 20,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
    color: "purple",
  },
  input: {
    width: '70%',
    marginBottom: 10,
    marginLeft: 20,
    fontSize: 16,
    borderRadius: 2,
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  botao:{
    width: "50%",
    backgroundColor: "#6600CC",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 2,
    paddingBottom: 5,
    marginRight: 5,
  },
  textoBotao: {
    width: "100%",
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});

export default Styles;