import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
const logoImage = require("./assets/adaptive-icon.png");
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      {/* <Image source={logoImage} style={{ width: 300, height: 300 }} />
      <Image
        source={{ uri: "https://picsum.photos/seed/picsum/300/300" }}
        style={{ width: 300, height: 300 }}
      /> */}

      <ImageBackground source={logoImage} style={{ flex: 1 }}>
        <Text> Image Text</Text>
      </ImageBackground>
    </View>
  );
}
