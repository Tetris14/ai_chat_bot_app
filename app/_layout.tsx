import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Image } from "react-native";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            headerTitle: "Chat GTP",
            headerStyle: { backgroundColor: "transparent" },
            headerRight: () => (
              <View>
                <Image style={{width: 20, height: 20, marginRight: 15}} source={require("../assets/images/edit.png")} />
              </View>
            ),
            headerTintColor: "black"
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
