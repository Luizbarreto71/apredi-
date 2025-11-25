import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import CardInfo from "../../src/components/AprendaMais/CardInfo";
import { useAuthStore } from "../../src/store/authStore";

export default function PainelProfessor() {
  const logout = useAuthStore((state: any) => state.logout);

  async function handleLogout() {
    await logout();
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Painel do Professor</Text>
      <Text style={styles.subtitle}>Acompanhamento da turma</Text>

      <View style={styles.cards}>
        <CardInfo title="Alunos" value="22" />
        <CardInfo title="Jogos Realizados" value="140" />
        <CardInfo title="Relatórios" value="47" />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ver Alunos</Text>
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
