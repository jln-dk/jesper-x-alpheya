import { env } from "@/config/env";
import { createBrowserClient } from "@supabase/ssr";

export const createClient = () =>
  createBrowserClient(env.publicSupabaseUrl, env.publicSupabaseAnonKey);
