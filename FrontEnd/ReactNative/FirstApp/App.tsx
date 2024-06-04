import { StyleSheet } from "react-native";
import Navigation from "./Navigation";

export default function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#f0f0f0",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 16,
    paddingTop: 50,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 16,
  },
  boxButtons: {
    flex: 1,
    flexDirection: "row",
  },
});
