import { View, TextInput, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/theme";

export default function AInput({ label, ...props }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  label: {
    marginBottom: 4,
    color: colors.text,
    fontWeight: "600",
  },
  input: {
    backgroundColor: colors.inputBg,
    padding: 12,
    borderRadius: 8,
  },
});
