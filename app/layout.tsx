import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
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
              <div className="w-full flex justify-center h-16">
                <div className="w-full max-w-5xl flex justify-between items-center py-3 text-sm">
                  <div className="flex gap-5 items-center font-semibold">
                    <a href="/">Home</a>
                  </div>
                  <EnvVarWarning />
                </div>
              </div>
              <div className="flex flex-col gap-20 w-full">
                {children}
              </div>

              <footer className="w-full bg-sky-900 mt-12 text-white flex items-center justify-center mx-auto text-center text-xs gap-8 py-16 flex-col gap-4">
                <p>
                  made by{" "}
                  <a
                    href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                  >
                    0xonetwothreefourfive
                  </a>
                </p>
                <p>pls contact me on X</p>
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
