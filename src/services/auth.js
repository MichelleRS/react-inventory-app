import { client } from './client.js';

// get current user from Supabase
export function getUser() {
  return client.auth.currentUser;
}

// get email, password, and type
export async function authUser(email, password, type) {
  let response;
  if (type === 'sign-up') {
    response = await client.auth.signUp({ email, password });
  } else {
    response = await client.auth.signInWithPassword({ email, password });
  }
  if (response.error) {
    throw response.error;
  }
  return response.user;
}

// TODO sign out user
