import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { spacing, typography } from "../../src/theme/theme";
import { colors } from "../../src/theme/colors";
import AButton from "../../src/components/AprendaMais/AButton";
import { useAuthStore } from "../../src/store/authStore";

export default function ListaCriancas() {
  const logout = useAuthStore((state: any) => state.logout);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crianças</Text>
      <Text style={styles.subtitle}>
        Nenhuma criança cadastrada ainda.
      </Text>

      <AButton title="Cadastrar Criança" onPress={() => {}} />
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
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    marginBottom: spacing.lg,
    fontSize: 16,
    color: colors.textSecondary,
  },
});
