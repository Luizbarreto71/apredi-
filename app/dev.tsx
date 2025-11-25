// app/dev.tsx
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function DevNavegacao() {
  const navigation = useNavigation<NavigationProp<any>>();
  const rotas = [
    { label: "Painel do Gestor", path: "/gestor/painel" },
    { label: "Crianças (Professor)", path: "/professor/criancas" },
    { label: "Jogos (Professor)", path: "/professor/jogos" },
    { label: "Memória (jogo)", path: "/professor/jogos/memoria" },
    { label: "Painel Responsável", path: "/responsavel/criancas" },
    { label: "Login", path: "/login" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🔧 Modo Desenvolvedor</Text>
      <Text style={styles.subtitle}>Acesse qualquer tela sem login</Text>

      {rotas.map((item, index) => (
        <TouchableOpacity key={index} style={styles.button} onPress={() => navigation.navigate(item.path)}>
          <Text style={styles.buttonText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    gap: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#6200EE",
    padding: 14,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
  },
});
