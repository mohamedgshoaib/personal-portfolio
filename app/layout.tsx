import type { Metadata } from "next"
import { CalSansUI } from "@calcom/cal-sans-ui/ui"

import "./globals.css"
import { FloatingDock } from "@/components/floating-dock"
import { ThemeProvider } from "@/components/theme-provider"
import {
  createAbsoluteUrl,
  siteDescription,
  siteKeywords,
  siteName,
  siteUrl,
  siteXHandle,
} from "@/lib/metadata/site-metadata"

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
    images: [createAbsoluteUrl("/opengraph-image")],
    siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [createAbsoluteUrl("/twitter-image")],
    creator: siteXHandle,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`antialiased ${CalSansUI.variable}`}
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
