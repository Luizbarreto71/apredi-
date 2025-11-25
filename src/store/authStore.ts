import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { supabase } from "../lib/supabase";

const SESSION_KEY = "@aprendaplus/session";

export const useAuthStore = create((set) => ({
  session: null,
  user: null,
  isLoading: false,
  isInitialized: false,

  initialize: async () => {
    try {
      const saved = await AsyncStorage.getItem(SESSION_KEY);
      if (saved) {
        const session = JSON.parse(saved);
        const { data } = await supabase
          .from("users")
          .select("*")
          .eq("id", session.userId)
          .maybeSingle();

        if (data) {
          return set({
            session,
            user: data,
            isInitialized: true,
          });
        }
      }
    } catch (err) {}
    set({ isInitialized: true });
  },

  login: async (email: string, password: string) => {
    set({ isLoading: true });

    const { data: auth, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error || !auth?.user)
      throw new Error("Email ou senha inválidos");

    const { data: profile } = await supabase
      .from("users")
      .select("*")
      .eq("id", auth.user.id)
      .maybeSingle();

    const session = {
      userId: auth.user.id,
      token: auth.session.access_token,
      role: profile.role,
      name: profile.name,
      email: profile.email,
    };

    await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(session));

    set({ user: profile, session, isLoading: false });
  },

  logout: async () => {
    await supabase.auth.signOut();
    await AsyncStorage.removeItem(SESSION_KEY);
    set({ user: null, session: null });
  },
}));
