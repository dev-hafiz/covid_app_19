import { View, StyleSheet } from "react-native";
import React from "react";
import Text from "../components/text/text";
import { colors } from "../theme/colors";
import { StatusBar } from "expo-status-bar";
import TopSheet from "../components/top-sheet";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <TopSheet />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
