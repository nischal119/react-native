import { Image, StyleSheet, View } from "react-native";
const logoImage = require("./assets/adaptive-icon.png");
export default function App() {
  return (
    <View>
      <View style={{ flex: 1, backgroundColor: "plum" }}>
        <Image source={logoImage} />
      </View>
    </View>
  );
}
