import { ImageResponse } from "next/og"

import { siteName } from "@/lib/metadata/site-metadata"
import { siteProfile } from "@/lib/content/site-content"

const OG_BACKGROUND = "#f7f5f1"
const OG_FOREGROUND = "#18181b"
const OG_MUTED = "#686867"
const OG_BORDER = "rgba(24, 24, 27, 0.1)"
const OG_ROOT_STYLE = {
  width: "100%",
  height: "100%",
  display: "flex",
  background: OG_BACKGROUND,
  color: OG_FOREGROUND,
  padding: "36px",
  fontFamily: "sans-serif",
} as const
const OG_FRAME_STYLE = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  border: `1px solid ${OG_BORDER}`,
  borderRadius: "30px",
  padding: "42px 46px",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.52) 0%, rgba(255,255,255,0.12) 100%)",
} as const
const OG_HEADER_STYLE = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: OG_MUTED,
  fontSize: 24,
} as const
const OG_EYEBROW_STYLE = {
  display: "flex",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
} as const
const OG_CONTENT_STYLE = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  maxWidth: "900px",
} as const
const OG_DESCRIPTION_STYLE = {
  display: "flex",
  fontSize: 27,
  lineHeight: 1.45,
  color: OG_MUTED,
  maxWidth: "760px",
} as const
const OG_FOOTER_STYLE = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: "20px",
  borderTop: `1px solid ${OG_BORDER}`,
  color: OG_MUTED,
  fontSize: 22,
} as const
const OG_INLINE_FLEX_STYLE = { display: "flex" } as const

export const ogImageSize = {
  width: 1200,
  height: 630,
} as const

export const pngContentType = "image/png"

type CreateOgImageOptions = {
  eyebrow: string
  title: string
  description: string
  footer?: string
}

function getTitleFontSize(title: string) {
  if (title.length > 70) {
    return 58
  }

  if (title.length > 42) {
    return 70
  }

  return 82
}

export function createOgImage({
  eyebrow,
  title,
  description,
  footer,
}: CreateOgImageOptions) {
  const titleFontSize = getTitleFontSize(title)

  return new ImageResponse(
    <div style={OG_ROOT_STYLE}>
      <div style={OG_FRAME_STYLE}>
        <div style={OG_HEADER_STYLE}>
          <div style={OG_EYEBROW_STYLE}>{eyebrow}</div>
          <div style={OG_INLINE_FLEX_STYLE}>{siteName}</div>
        </div>

        <div style={OG_CONTENT_STYLE}>
          <div
            style={{
              display: "flex",
              fontSize: titleFontSize,
              lineHeight: 1.02,
              letterSpacing: "-0.05em",
              fontWeight: 500,
            }}
          >
            {title}
          </div>
          <div style={OG_DESCRIPTION_STYLE}>{description}</div>
        </div>

        <div style={OG_FOOTER_STYLE}>
          <div style={OG_INLINE_FLEX_STYLE}>Portfolio and writing</div>
          <div style={OG_INLINE_FLEX_STYLE}>{footer ?? siteProfile.role}</div>
        </div>
      </div>
    </div>,
    { ...ogImageSize }
  )
}
