import { StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import { fetchPainting } from "../store/painting/actions";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const dispatch = useDispatch();
  function buttonClick() {
    dispatch(fetchPainting());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button
        onPress={buttonClick}
        title="Fetch something"
        color="#c1262c"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
