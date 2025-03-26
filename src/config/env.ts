export const env = {
  baseUrl: process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000",

  // Supabase
  publicSupabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  publicSupabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
};

if (!env.publicSupabaseUrl || !env.publicSupabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}
