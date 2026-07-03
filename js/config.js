// Supabase / 토스페이먼츠 설정
// ── 아래 3개 값을 본인 것으로 채우세요. (SETUP.md 참고)
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const SUPABASE_URL = "https://YOUR_PROJECT.supabase.co";
export const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
export const TOSS_CLIENT_KEY = "test_ck_YOUR_TOSS_TEST_CLIENT_KEY";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 결제 승인 Edge Function 주소
export const CONFIRM_URL = `${SUPABASE_URL}/functions/v1/confirm-payment`;
