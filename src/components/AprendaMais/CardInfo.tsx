import { View, Text, StyleSheet } from "react-native";

export default function CardInfo({ title, value }: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  value: {
    fontSize: 32,
    fontWeight: "700",
    color: "#5A00C5",
  },
  title: {
    fontSize: 15,
    color: "#444",
    marginTop: 3,
  },
});
