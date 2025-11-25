import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
// Modo dev - permite acesso sem login
import { useAuthStore } from "../../src/store/authStore";
import { colors } from "../../src/theme/colors";
import { spacing, typography } from "../../src/theme/theme";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const login = useAuthStore((state: any) => state.login);
  const isLoading = useAuthStore((state: any) => state.isLoading);

  async function handleLogin() {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    try {
      await login(email.trim(), senha);
    } catch (err: any) {
      Alert.alert("Erro", err.message || "Falha ao fazer login");
    }
  }

  // ========== MODO DEV ==========
  const entrarSemLogin = (role: string) => {
    const mockSession = {
      userId: "dev-user",
      token: "dev-token",
      role,
      name: `Modo Dev (${role})`,
      email: `${role.toLowerCase()}@dev.com`,
    };

    useAuthStore.setState({ session: mockSession, isInitialized: true });
    // O redirecionamento será feito automaticamente pelo app/index.tsx
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Aprenda+</Text>
        <Text style={styles.subtitle}>Educação pública de qualidade</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <TouchableOpacity
            style={[styles.button, isLoading && styles.buttonDisabled]}
            onPress={handleLogin}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>
              {isLoading ? "Entrando..." : "Entrar"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* BOTÕES DE MODO DEV */}
        <Text style={styles.demoTitle}>Modo Dev (entrar sem login)</Text>

        <View style={styles.testArea}>
          <TouchableOpacity
            style={styles.testButton}
            onPress={() => entrarSemLogin("GESTOR")}
          >
            <Text style={styles.testButtonText}>Entrar como Gestor</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.testButton}
            onPress={() => entrarSemLogin("PROFESSOR")}
          >
            <Text style={styles.testButtonText}>Entrar como Professor</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.testButton}
            onPress={() => entrarSemLogin("RESPONSAVEL")}
          >
            <Text style={styles.testButtonText}>Entrar como Responsável</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background || "#F7F7F7",
    justifyContent: "center",
    padding: spacing.xl || 20,
  },
  card: {
    width: "100%",
    maxWidth: 450,
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
    borderRadius: 18,
    padding: 30,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 15,
    elevation: 4,
  },
  title: {
    ...typography.h1,
    fontSize: 32,
    color: colors.primary || "#5A00C5",
    fontWeight: "800",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    color: colors.textSecondary || "#666",
    marginTop: 4,
    fontSize: 14,
  },
  form: {
    marginTop: 20,
    gap: 10,
  },
  label: {
    color: "#4A4A4A",
    fontSize: 14,
    marginLeft: 4,
    marginBottom: 4,
  },
  input: {
    backgroundColor: colors.inputBg || "#F2F2F7",
    padding: 12,
    borderRadius: 10,
    fontSize: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.primary || "#5A00C5",
    padding: 14,
    borderRadius: 12,
    marginTop: 10,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  demoTitle: {
    marginTop: 30,
    textAlign: "center",
    color: "#333",
    fontWeight: "600",
  },
  testArea: {
    marginTop: 10,
    gap: 10,
  },
  testButton: {
    backgroundColor: "#EEE",
    padding: 12,
    borderRadius: 8,
  },
  testButtonText: {
    textAlign: "center",
    color: "#444",
    fontWeight: "500",
  },
});
