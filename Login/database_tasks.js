import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const supabaseUrl = process.env.DATABASE_URL;
const supabaseKey = process.env.DATABASE_PASS;
export const supabase = createClient(supabaseUrl, supabaseKey);

// change to return true or false
async function checkLogInData(username, password) {
  const { data, error } = await supabase
    .from('accounts')
    .select('*')
    .eq('username', username)
    .eq('password', password);
  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log('Data:', data);
  }
}

checkLogInData('Kostas', '3095b3f4eb1ac9a954255efa592f1f0211506bd7e1bdc6e881e1e418326323b3');