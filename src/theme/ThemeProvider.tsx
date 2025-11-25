import { createContext, useContext, useState } from "react";
import { colors } from "./colors";

const ThemeContext = createContext<any>(null);

export function ThemeProvider({ children }: any) {
  const [dark, setDark] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleTheme: () => setDark(!dark),
        colors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
