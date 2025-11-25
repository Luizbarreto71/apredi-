import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
// Importação CORRETA para obter o objeto de navegação no expo-router
import { useRouter } from "expo-router"; 
// Você pode remover 'useNavigation' se não estiver usando ele.
// import { useNavigation } from "@react-navigation/native"; 


export default function DevNavegacao() {
  // 👈 CORREÇÃO: Chama o hook useRouter para obter o objeto 'router'
  const router = useRouter(); 

  const rotas = [
    { label: "Painel do Gestor", path: "/(gestor)/painel" },
    { label: "Dashboard Gestor (index)", path: "/(gestor)" },
    { label: "Painel do Professor", path: "/(professor)" },
    { label: "Crianças (Professor)", path: "/(professor)/criancas" },
    { label: "Painel Responsável", path: "/(responsavel)" },
    { label: "Crianças (Responsável)", path: "/(responsavel)/criancas" },
    { label: "Tela de Login", path: "/(auth)/login" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🔧 Modo Desenvolvedor</Text>
      <Text style={styles.subtitle}>Toque em uma opção para ir direto para a tela.</Text>

      {rotas.map((item) => (
        <TouchableOpacity
          key={item.path}
          style={styles.button}
          // Usa o 'router' definido pelo hook
          onPress={() => router.push(item.path)}
        >
          <Text style={styles.buttonText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 60,
    gap: 12,
    backgroundColor: "#F5F3FF",
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 4,
    color: "#5A00C5",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#6A0DAD",
    padding: 14,
    borderRadius: 12,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
});