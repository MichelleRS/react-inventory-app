import { createClient } from "@supabase/supabase-js";

// initialize Supabase client
export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

// error handling
export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}
