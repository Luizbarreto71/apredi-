import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import CardInfo from "../../src/components/AprendaMais/CardInfo";
import { useAuthStore } from "../../src/store/authStore";

export default function PainelGestor() {
  const logout = useAuthStore((state: any) => state.logout);

  async function handleLogout() {
    await logout();
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Painel do Gestor</Text>
      <Text style={styles.subtitle}>Visão geral do município / escola</Text>

      <View style={styles.cards}>
        <CardInfo title="Professores" value="12" />
        <CardInfo title="Crianças Cadastradas" value="85" />
        <CardInfo title="Relatórios Gerados" value="36" />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
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
    marginTop: 25,
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
