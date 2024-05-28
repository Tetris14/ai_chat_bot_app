import { Image, Text, View, StyleSheet, Pressable } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Pressable>
        <Image
          source={require("../assets/images/menus.png")}
          style={styles.menuImage}
        />
      </Pressable>
      <Text style={styles.titleText}>Chat GTP</Text>
      <Pressable>
        <Image
          source={require("../assets/images/edit.png")}
          style={styles.editImage}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    width: "100%",
    paddingTop: 60,
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuImage: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
  editImage: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  titleText: {
    fontWeight: "bold",
  },
});
