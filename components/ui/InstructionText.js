import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instructionTxt, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionTxt: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },

});