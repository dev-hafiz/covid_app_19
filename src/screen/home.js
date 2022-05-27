import { View, StyleSheet } from "react-native";
import React from "react";
import Text from "../components/text/text";
import { colors } from "../theme/colors";

export default function Home() {
  return (
    <View>
      <Text> I'm fro home screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.white,
  },
});
