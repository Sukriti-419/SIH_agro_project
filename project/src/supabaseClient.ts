import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tpkfwnvvhesbylgnzvmp.supabase.co'; // Replace with your Supabase project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwa2Z3bnZ2aGVzYnlsZ256dm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MjYwMTcsImV4cCI6MjA3NDMwMjAxN30.toAL2Tn-SK8xG9C466Ee2wqriSBTByEB3jSTHhIaFRY'; // Replace with your anon/public API key

export const supabase = createClient(supabaseUrl, supabaseKey);