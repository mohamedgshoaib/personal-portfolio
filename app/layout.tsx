import localFont from "next/font/local"
import type { Metadata } from "next"

import "./globals.css"
import { FloatingDock } from "@/components/floating-dock"
import { ThemeProvider } from "@/components/theme-provider"
import {
  createVersionedSocialImageUrl,
  siteDescription,
  siteKeywords,
  siteName,
  siteUrl,
  siteXHandle,
} from "@/lib/metadata/site-metadata"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [...siteKeywords],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: "/",
    images: [createVersionedSocialImageUrl("/opengraph-image")],
    siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [createVersionedSocialImageUrl("/twitter-image")],
    creator: siteXHandle,
  },
}

const sans = localFont({
  src: "../public/fonts/google-sans-variable.ttf",
  display: "swap",
  variable: "--font-sans",
})

const mono = localFont({
  src: "../public/fonts/google-sans-code-variable.ttf",
  display: "swap",
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
      <body suppressHydrationWarning>
        <ThemeProvider>
          {children}
          <FloatingDock />
        </ThemeProvider>
      </body>
    </html>
  )
}
