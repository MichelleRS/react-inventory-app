import { client } from './client.js';

// get current user from Supabase
export function getUser() {
  return client.auth.currentUser;
}

// sign up user
export async function signUpUser(email, password) {
  const response = await client.auth.signUp({ email, password });
  return response.user;
}

// sign in user
export async function signInUser(email, password) {
  const response = await client.auth.signIn({ email, password });
  return response.user;
}

// sign out user
export async function signOut() {
  await client.auth.signOut();
}
