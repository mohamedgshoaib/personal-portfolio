"use client"

import * as React from "react"

function copyTextToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text)
  }

  const textarea = document.createElement("textarea")
  textarea.value = text
  textarea.setAttribute("readonly", "")
  textarea.style.position = "absolute"
  textarea.style.left = "-9999px"
  document.body.appendChild(textarea)
  textarea.select()

  try {
    const didCopy = document.execCommand("copy")

    if (!didCopy) {
      return Promise.reject(new Error("Clipboard copy command was rejected."))
    }
  } finally {
    document.body.removeChild(textarea)
  }

  return Promise.resolve()
}

export function CopyMarkdownButton({ markdown }: { markdown: string }) {
  const [copied, setCopied] = React.useState(false)
  const timeoutRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  async function handleCopy() {
    try {
      await copyTextToClipboard(markdown)
      setCopied(true)

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = window.setTimeout(() => {
        setCopied(false)
        timeoutRef.current = null
      }, 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Article copied" : "Copy article"}
        className="inline-flex min-h-8 shrink-0 items-center text-sm whitespace-nowrap text-action outline-none"
      >
        <span className="relative inline-flex h-5 items-center overflow-hidden whitespace-nowrap">
          <span className="invisible inline-flex items-center whitespace-nowrap">
            Article copied
          </span>
          <span
            aria-hidden="true"
            className={
              copied
                ? "absolute inset-0 inline-flex items-center whitespace-nowrap opacity-0 blur-[2px] transition-[opacity,filter] duration-180 ease-[var(--ease-out)]"
                : "blur-0 absolute inset-0 inline-flex items-center whitespace-nowrap opacity-100 transition-[opacity,filter] duration-180 ease-[var(--ease-out)]"
            }
          >
            <span>Copy article</span>
          </span>
          <span
            aria-hidden="true"
            className={
              copied
                ? "blur-0 absolute inset-0 inline-flex items-center whitespace-nowrap opacity-100 transition-[opacity,filter] duration-180 ease-[var(--ease-out)]"
                : "absolute inset-0 inline-flex items-center whitespace-nowrap opacity-0 blur-[2px] transition-[opacity,filter] duration-180 ease-[var(--ease-out)]"
            }
          >
            <span>Article copied</span>
          </span>
        </span>
      </button>
      <span className="sr-only" aria-live="polite" role="status">
        {copied ? "Article copied to clipboard." : ""}
      </span>
    </>
  )
}
