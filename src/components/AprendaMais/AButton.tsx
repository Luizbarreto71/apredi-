import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/theme";

export default function AButton({ title, onPress, loading }: any) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={loading}
    >
      <Text style={styles.text}>{loading ? "..." : title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: 8,
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
  },
});
