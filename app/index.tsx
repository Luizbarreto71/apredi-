
import { Redirect } from "expo-router/build/routing/Redirect";
import { useAuthStore } from "../src/store/authStore";
import { View, Text } from "react-native";

// 🔧 MODO DEV: enquanto você está construindo layout / jogos
// true  -> ao abrir o app, vai para /dev-navegacao
// false -> fluxo normal: login -> painel por papel
const DEV_MODE = true;

// Componente simples para mostrar durante o carregamento
const LoadingScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <Text>Carregando...</Text>
    </View>
);

export default function Index() {
  const session = useAuthStore((state: any) => state.session);
  const initialized = useAuthStore((state: any) => state.isInitialized);

  // Espera o authStore inicializar (ler AsyncStorage)
  if (!initialized) {
        // Mostra uma tela de carregamento enquanto espera
        return <LoadingScreen />;
    }

  // 🔧 Enquanto estiver desenvolvendo, manda para a tela de dev
  if (DEV_MODE) {
    return <Redirect href="/dev-navegacao" />;
  }

  // 🔒 Fluxo real (produção): sem sessão -> login
  if (!session) {
    return <Redirect href="/(auth)/login" />;
  }

  // Usuário logado: manda para o painel correto
  if (session.role === "GESTOR") {
    return <Redirect href="/(gestor)/painel" />;
  }

  if (session.role === "PROFESSOR") {
    return <Redirect href="/(professor)/criancas" />;
  }

  if (session.role === "RESPONSAVEL") {
    return <Redirect href="/(responsavel)/criancas" />;
  }

  // Se der algum papel estranho, manda pro login de novo
  return <Redirect href="/(auth)/login" />;
}