// Supabase / 토스페이먼츠 설정
// ── 아래 3개 값을 본인 것으로 채우세요. (SETUP.md 참고)
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const SUPABASE_URL = "https://lgexiiwvxxrfemkdzmhf.supabase.co";
export const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxnZXhpaXd2eHhyZmVta2R6bWhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5NzYyNjMsImV4cCI6MjA5ODU1MjI2M30.QWJEcecmu5l51B8qj5hKMTZv0i6uCyFh_Z40EFEyUzk";
// 토스 클라이언트 키는 아직 미설정 (결제 붙일 때 채웁니다)
export const TOSS_CLIENT_KEY = "test_ck_YOUR_TOSS_TEST_CLIENT_KEY";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 결제 승인 Edge Function 주소
export const CONFIRM_URL = `${SUPABASE_URL}/functions/v1/confirm-payment`;
