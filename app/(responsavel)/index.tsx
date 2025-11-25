import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import CardInfo from "../../src/components/AprendaMais/CardInfo";
import { useAuthStore } from "../../src/store/authStore";

export default function PainelResponsavel() {
  const logout = useAuthStore((state: any) => state.logout);

  async function handleLogout() {
    await logout();
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Meus Filhos</Text>
      <Text style={styles.subtitle}>Acompanhamento familiar</Text>

      <View style={styles.cards}>
        <CardInfo title="Filhos Cadastrados" value="1" />
        <CardInfo title="Relatórios" value="3" />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar Novo Filho</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: "#777" }]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7F7F7", padding: 20 },
  title: { fontSize: 28, fontWeight: "800", color: "#5A00C5" },
  subtitle: { color: "#777", marginBottom: 20 },
  cards: { marginTop: 10, gap: 12 },
  button: {
    backgroundColor: "#5A00C5",
    marginTop: 20,
    padding: 14,
    borderRadius: 12,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
