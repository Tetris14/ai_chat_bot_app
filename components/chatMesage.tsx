import { View, Text, StyleSheet } from "react-native";

interface Props {
  msg: string
}

export default function ChatMessage({msg}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.msgText}>
        {msg}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DCDCDC",
    borderRadius: 10,
    padding: 10,
    width: "20%",
  },
  msgText: {
    opacity: 1
  }
})