import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function EnvVarWarning() {
  return (
    <div className="flex gap-4 items-center">
      <ThemeSwitcher />
      {/*<Badge variant={"outline"} className="font-normal">
        Sigma Version
      </Badge>
      <div className="flex gap-2">
        <Button
          asChild
          size="sm"
          variant={"outline"}
          disabled
          className="opacity-75 cursor-none pointer-events-none"
        >
          <Link href="/sign-in">Sign in</Link>
        </Button>
        <Button
          asChild
          size="sm"
          variant={"default"}
          disabled
          className="opacity-75 cursor-none pointer-events-none"
        >
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>*/}
    </div>
  );
}
