import { client } from "./client.js";

// get current user from Supabase
export function getUser() {
  return client.auth.currentUser;
}
