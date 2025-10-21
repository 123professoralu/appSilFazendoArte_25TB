import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://roxefslcjfehxitcxppl.supabase.co'
const supabasePublishableKey = 'sb_publishable_vczGYvgjmkyS6vRbY9CjBw_5f_yRdmn'

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})