import { Google_Sans, Google_Sans_Code } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { FloatingDock } from "@/components/floating-dock"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: {
    default: "Mohamed Gamal",
    template: "%s | Mohamed Gamal",
  },
  description:
    "Frontend Developer building fast, SEO-driven web applications with full RTL support, clean architecture, and durable frontend systems.",
}

const sans = Google_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const mono = Google_Sans_Code({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", mono.variable, "font-sans", sans.variable)}
    >
      <body>
        <ThemeProvider>
          {children}
          <FloatingDock />
        </ThemeProvider>
      </body>
    </html>
  )
}
