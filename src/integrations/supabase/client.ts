import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl =
  (window as any).__SUPABASE_URL__ ||
  (import.meta as any)?.env?.VITE_SUPABASE_URL

const supabaseAnonKey =
  (window as any).__SUPABASE_ANON_KEY__ ||
  (import.meta as any)?.env?.VITE_SUPABASE_ANON_KEY

let client: SupabaseClient | null = null

if (supabaseUrl && supabaseAnonKey) {
  client = createClient(supabaseUrl, supabaseAnonKey)
} else {
  console.warn(
    'Supabase is not configured. Connect your project to Supabase in Lovable (green button top-right).'
  )
}

export const getSupabase = (): SupabaseClient => {
  if (!client) {
    throw new Error(
      'Supabase is not configured. Please connect Supabase in Lovable and try again.'
    )
  }
  return client
}
