import DeployButton from "@/components/deploy-button";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Github } from 'lucide-react';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Degen Analysis",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen bg-slate-50 flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-0 items-center">
              <div className="w-full px-4 lg:px-0 flex justify-center h-16">
                <div className="w-full max-w-5xl flex justify-between items-center py-3 text-sm">
                  <div className="flex gap-5 items-center font-semibold">
                    <a href="/">Home</a>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Link className="hover:text-pink-300" href="https://github.com/imbjdd/degenanalysis" target="_blank"><Github /></Link>
                    <ThemeSwitcher />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-20 w-full">
                {children}
              </div>

    <footer className="relative w-full flex flex-col items-center">
      <div className="flex flex-col gap-16 bg-sky-900 w-full items-center bg-[length:64px_64px] bg-[linear-gradient(to_right,_#075985_1px,_transparent_1px),_linear-gradient(to_bottom,_#075985_1px,_transparent_1px)]">
        <div className="max-w-5xl w-full flex flex-col justify-center gap-8 py-20">
          <p className="px-4 lg:px-0 text-4xl break-all lg:text-7xl font-black text-pink-300">
            #DegenAnalysis
          </p>
        </div>
      </div>
    </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
