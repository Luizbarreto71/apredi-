import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { typography, spacing } from "../../src/theme/theme";
import { colors } from "../../src/theme/colors";
import AButton from "../../src/components/AprendaMais/AButton";
import { useAuthStore } from "../../src/store/authStore";

export default function PainelGestor() {
  const logout = useAuthStore((state: any) => state.logout);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Painel do Gestor</Text>
      <Text style={styles.subtitle}>Visão geral do município / escola</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>0 Professores</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>0 Crianças Cadastradas</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>0 Relatórios Gerados</Text>
      </View>

      <AButton title="Sair" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
  },
  title: {
    ...typography.h1,
    marginBottom: spacing.sm,
    color: colors.primary,
  },
  subtitle: {
    ...typography.body,
    marginBottom: spacing.xl,
  },
  card: {
    backgroundColor: colors.card,
    padding: spacing.lg,
    borderRadius: 12,
    marginBottom: spacing.md,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
});
