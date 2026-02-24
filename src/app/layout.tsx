import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sandeep Nayak | Engineering Leader & Cloud Modernization Architect",
  description:
    "Engineering leader specializing in Azure cloud modernization, event-driven microservices, and generative AI for enterprise systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
          <header className="sticky top-0 z-20 border-b border-white/10 bg-black/40 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/20 ring-1 ring-sky-500/40">
                  <span className="text-sm font-semibold text-sky-300">
                    SN
                  </span>
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-slate-50">
                    Sandeep Nayak
                  </p>
                  <p className="text-xs text-slate-400">
                    Engineering Leader · Cloud Modernization
                  </p>
                </div>
              </Link>
              <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
                <Link
                  href="/"
                  className="nav-link-pro transition hover:text-slate-50"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="nav-link-pro transition hover:text-slate-50"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="nav-link-pro transition hover:text-slate-50"
                >
                  Projects
                </Link>
              </nav>
            </div>
          </header>

          <main className="mx-auto max-w-5xl px-6 py-10 sm:py-14">
            {children}
          </main>

          <footer className="border-t border-white/10 bg-black/40">
            <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} Sandeep Nayak. All rights
                reserved.
              </p>
              <p>
                Engineering Leadership · Cloud Modernization · Generative AI in
                Enterprise Systems
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
