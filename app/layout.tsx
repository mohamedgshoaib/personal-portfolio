import type { Metadata } from "next"

import "./globals.css"
import { SoundProvider } from "@/components/app/sound-provider"
import { ThemeProvider } from "@/components/app/theme-provider"
import { MotionDomMaxProvider } from "@/lib/motion/runtime"
import { siteConfig } from "@/lib/metadata/site-config"
export const metadata: Metadata = {
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="antialiased">
      <body>
        <SoundProvider>
          <ThemeProvider>
            <MotionDomMaxProvider>{children}</MotionDomMaxProvider>
          </ThemeProvider>
        </SoundProvider>
      </body>
    </html>
  )
}
