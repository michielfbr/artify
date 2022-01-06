import { StyleSheet, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import EditScreenInfo from "../components/EditScreenInfo";
import { Image } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import { fetchPainting } from "../store/art/actions";
import { selectPainting, selectNoOfFetches } from "../store/art/selectors";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const dispatch = useDispatch();
  const NoOfFetches: number = useSelector(selectNoOfFetches);
  const pageNo: number = NoOfFetches + 1
  function buttonClick() {
    dispatch(fetchPainting(pageNo));
  }
  const paintings: [] = useSelector(selectPainting);
  console.log("paintings", paintings);

  interface Painting {
    id: string;
    title: string;
    webImage: {
      guid: string;
      height: number;
      offsetPercentageX: number;
      offsetPercentageY: number;
      url: string;
      width: number;
    };
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      {!paintings ? (
        <></>
      ) : (
        paintings.map((painting: Painting) => {
          return (
            <View key={painting.id}>
              <Text>{painting.title}</Text>
              <Image
                source={{ uri: painting.webImage.url }}
                style={{ width: "100%", height: 160, marginBottom: 30 }}
              />
            </View>
          );
        })
      )}

      <Button onPress={buttonClick} title="Fetch something" color="#c1262c" />
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
