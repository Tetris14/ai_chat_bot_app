import ChatMessage from "@/components/chatMesage";
import Header from "@/components/header";
import Navbar from "@/components/navbar/navbar";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Dimensions, Keyboard } from "react-native";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";

interface ChatMessage {
  ai: boolean;
  message: string;
}

export default function Index() {
  const [convo, setConvo] = useState<ChatMessage[]>([]);
  const screenHeight = Dimensions.get("window").height;
  const height = useSharedValue(0);

  const handleFocus = () => {
    height.value = withTiming(height.value - 650, { duration: 300 });
  };

  const handleFocusLose = () => {
    height.value = withTiming((height.value = 0), {
      duration: 300,
    });
  };

  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      "keyboardWillShow",
      () => {
        handleFocus();
      }
    );

    const keyboardWillHideListener = Keyboard.addListener(
      "keyboardWillHide",
      () => {
        handleFocusLose();
      }
    );

    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, []);

  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height,
      }}
    >
      <View style={styles.chatContainer}>
        <ChatMessage msg="bb jtm" />
        <ChatMessage msg="nn moi jtm" />
      </View>
      <Navbar />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  chatContainer: {
    width: "90%",
    height: "80%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    gap: 10,
  },
});
