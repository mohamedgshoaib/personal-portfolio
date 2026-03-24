import { ImageResponse } from "next/og"

import { siteName } from "@/lib/metadata/site-metadata"
import { siteProfile } from "@/lib/content/site-content"

const OG_BACKGROUND = "#f7f5f1"
const OG_FOREGROUND = "#18181b"
const OG_MUTED = "#686867"
const OG_BORDER = "rgba(24, 24, 27, 0.1)"

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
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: OG_BACKGROUND,
        color: OG_FOREGROUND,
        padding: "36px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
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
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: OG_MUTED,
            fontSize: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
          <div style={{ display: "flex" }}>{siteName}</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "900px",
          }}
        >
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
          <div
            style={{
              display: "flex",
              fontSize: 27,
              lineHeight: 1.45,
              color: OG_MUTED,
              maxWidth: "760px",
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "20px",
            borderTop: `1px solid ${OG_BORDER}`,
            color: OG_MUTED,
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex" }}>Portfolio and writing</div>
          <div style={{ display: "flex" }}>{footer ?? siteProfile.role}</div>
        </div>
      </div>
    </div>,
    { ...ogImageSize }
  )
}
