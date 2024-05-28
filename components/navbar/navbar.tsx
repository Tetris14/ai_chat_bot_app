import { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Image, Pressable, Keyboard } from "react-native";
import Animated, { useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import { Dimensions } from "react-native";

export default function Navbar() {
  const [text, setText] = useState<string>("");
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const width = useSharedValue(screenWidth / 1.3);
  const height = useSharedValue(screenHeight/28);
  const [plusButtonPressed, setPlusButtonPressed] = useState<boolean>(false);

  const handlePress = () => {
    if (plusButtonPressed) {
      width.value = withTiming(width.value + 50, { duration: 500 });
      setPlusButtonPressed(false);
    } else {
      width.value = withTiming(width.value - 50, { duration: 500 });
      setPlusButtonPressed(true);
    }
  };

  return (
    <View style={styles.container}>
      {!plusButtonPressed ? (
        <Pressable onPress={handlePress}>
          <Image
            source={require("../../assets/images/add.png")}
            style={styles.plus}
          />
        </Pressable>
      ) : (
        <Animated.View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            paddingRight: 10,
          }}
        >
          <Pressable onPress={handlePress}>
            <Image
              source={require("../../assets/images/camera.png")}
              style={styles.camera}
            />
          </Pressable>
          <Pressable onPress={handlePress}>
            <Image
              source={require("../../assets/images/folder.png")}
              style={styles.folder}
            />
          </Pressable>
          <Pressable onPress={handlePress}>
            <Image
              source={require("../../assets/images/image.png")}
              style={styles.picture}
            />
          </Pressable>
        </Animated.View>
      )}
      <Animated.View
        style={{
          width,
          height
        }}
      >
        <TextInput
          style={styles.textInput}
          onChangeText={setText}
          value={text}
          placeholder="Message"
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderRadius: 15,
    borderColor: "#bac5d6",
    borderWidth: 1,
    width: "100%",
    height: 30,
    paddingLeft: 10,
  },
  plus: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  tripleButtonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    paddingRight: 10,
  },
  folder: {
    width: 20,
    height: 20,
  },
  picture: {
    width: 20,
    height: 20,
  },
  camera: {
    width: 20,
    height: 20,
  },
});
