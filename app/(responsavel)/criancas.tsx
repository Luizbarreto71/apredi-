import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { spacing, typography } from "../../src/theme/theme";
import { colors } from "../../src/theme/colors";
import AButton from "../../src/components/AprendaMais/AButton";
import { useAuthStore } from "../../src/store/authStore";

export default function ResponsavelHome() {
  const logout = useAuthStore((state: any) => state.logout);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Filhos</Text>
      <Text style={styles.subtitle}>Você ainda não cadastrou um perfil.</Text>
      
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
    ...typography.body,
    color: colors.textSecondary,
  },
});
