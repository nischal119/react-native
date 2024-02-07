import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Pressable,
} from "react-native";
const logoImage = require("./assets/adaptive-icon.png");
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      {/* //! ScrollView is used to scroll the content */}

      {/* <ScrollView>
        <Image source={logoImage} style={{ width: 300, height: 300 }} />

        <Text>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
          dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit
          amet, consectetur adipiscing elit. lorem ipsum dolor sit amet,
          consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur
          adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing
          elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
          ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor
          sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet,
          consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur
          adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing
          elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
          ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor
          sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet,
          consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur
          adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </Text>
        <Image source={logoImage} style={{ width: 300, height: 300 }} />
        {/*<Image
        source={{ uri: "https://picsum.photos/seed/picsum/300/300" }}
        style={{ width: 300, height: 300 }}
      /> */
      /* <ImageBackground source={logoImage} style={{ flex: 1 }}>
        <Text> Image Text</Text>
      </ImageBackground> 
      </ScrollView> */}

      {/* //! Buttons and click event  */}
      <Button
        title="Press Me"
        color="red"
        disabled={false}
        onPress={() => {
          console.log("Button Pressed");
        }}
      />
      {/* //! Pressable components} 
      
      - Pressable listening props
      > onPressIn - when the press is started
      > onPressOut - when the press is released
      > onLongPress - when the press is held for 500 ms
      
      
      */}
      {/* <Pressable
        onPress={() => {
          console.log("Pressable  Pressed");
        }}
      >
        <Image source={logoImage} style={{ width: 300, height: 300 }} />

        <Text>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
          dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit
          amet, consectetur adipiscing elit. lorem ipsum dolor sit amet,
          consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur
          adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing
          elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
          ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor
          sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet,
          consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur
          adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing
          elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
          ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor
          sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet,
          consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur
          adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </Text>
      </Pressable> */}

      <Pressable
        onPressIn={() => {
          console.log("onPressIn");
        }}
      >
        <Text>For onPressIn</Text>
      </Pressable>
      <Pressable
        onPressOut={() => {
          console.log("onPressOut");
        }}
      >
        <Text>For onPressOut</Text>
      </Pressable>
      <Pressable
        onLongPress={() => {
          console.log("onLongPress");
        }}
      >
        <Text>For onLongPress</Text>
      </Pressable>
    </View>
  );
}
