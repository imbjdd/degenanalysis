import Hero from "@/components/hero";
import Meme from "@/components/meme";
import TryToken from "@/components/trytoken";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default async function Home() {
  return (
    <div className="">
      <Hero />
      <TryToken />
      <Meme />
    </div>
  );
}
