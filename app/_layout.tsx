import { useEffect } from "react";
import { Stack } from "expo-router";
import { ThemeProvider } from "../src/theme/ThemeProvider";
import { useAuthStore } from "../src/store/authStore";

export default function RootLayout() {
  const initialize = useAuthStore((state) => state.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}
      />
    </ThemeProvider>
  );
}
