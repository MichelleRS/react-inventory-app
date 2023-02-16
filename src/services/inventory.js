import { getUser } from './auth.js';
import { checkError, client } from './client.js';

// send user item input to Supabase
export async function createItemRow(name, stocked) {
  const response = await client.from('inventory').insert({ name, stocked }).single();
  return checkError(response);
}

// get user inventory from Supabase
export async function getUserInventory() {
  const response = await client.from('inventory').select('*').match({ user_id: getUser().id });
  return checkError(response);
}
