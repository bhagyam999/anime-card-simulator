import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase =
  supabaseUrl && supabasePublishableKey
    ? createClient(supabaseUrl, supabasePublishableKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
        },
      })
    : null;

let guestSessionPromise: Promise<string> | null = null;

export function ensureGuestUser(): Promise<string> {
  if (!supabase) {
    return Promise.reject(new Error("Supabase is not configured."));
  }

  if (!guestSessionPromise) {
    guestSessionPromise = (async () => {
      const { data: sessionData, error: sessionError } =
        await supabase.auth.getSession();
      if (sessionError) throw sessionError;

      if (sessionData.session?.user) {
        return sessionData.session.user.id;
      }

      const { data, error } = await supabase.auth.signInAnonymously();
      if (error) throw error;
      if (!data.user) throw new Error("Guest account could not be created.");
      return data.user.id;
    })().catch((error: unknown) => {
      guestSessionPromise = null;
      throw error;
    });
  }

  return guestSessionPromise;
}
