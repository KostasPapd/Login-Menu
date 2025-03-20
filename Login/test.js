import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.DATABASE_URL
const supabaseKey = process.env.DATABASE_PASS
export const supabase = createClient(supabaseUrl, supabaseKey);

import { supabase } from './supabaseClient';

async function fetchData() {
  const { data, error } = await supabase
    .from('test') // Replace with your table name
    .select('*');

  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log('Data:', data);
  }
}

fetchData();