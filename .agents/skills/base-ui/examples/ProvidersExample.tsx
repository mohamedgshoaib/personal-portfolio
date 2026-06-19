"use client"

import { CSPProvider } from "@base-ui/react/csp-provider"
import { DirectionProvider } from "@base-ui/react/direction-provider"

export function BaseUIProviders({
  children,
  direction = "ltr",
  nonce,
}: {
  children: React.ReactNode
  direction?: "ltr" | "rtl"
  nonce?: string
}) {
  return (
    <CSPProvider nonce={nonce}>
      <div dir={direction} className="root">
        <DirectionProvider direction={direction}>{children}</DirectionProvider>
      </div>
    </CSPProvider>
  )
}
