"use client"

import * as React from "react"
import { useHoverCapability } from "@/hooks/use-hover-capability"

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

export function ContactCopy({ email }: { email: string }) {
  const [copied, setCopied] = React.useState(false)
  const supportsHover = useHoverCapability()
  const timeoutRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  function resetToIdle() {
    setCopied(false)
    timeoutRef.current = null
  }

  async function handleCopy() {
    try {
      await copyTextToClipboard(email)
      setCopied(true)

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = window.setTimeout(resetToIdle, 1800)
    } catch {
      resetToIdle()
    }
  }

  const helperLabel = copied
    ? "Copied"
    : supportsHover
      ? "Want to get in touch? Click to copy."
      : "Want to get in touch? Tap to copy."

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative flex h-5 w-full items-center justify-center overflow-hidden text-sm text-muted-foreground">
        <span
          className={
            copied
              ? "absolute inset-0 flex items-center justify-center whitespace-nowrap opacity-0 motion-fade"
              : "absolute inset-0 flex items-center justify-center whitespace-nowrap opacity-100 motion-fade"
          }
        >
          {supportsHover
            ? "Want to get in touch? Click to copy."
            : "Want to get in touch? Tap to copy."}
        </span>
        <span
          className={
            copied
              ? "absolute inset-0 flex items-center justify-center whitespace-nowrap opacity-100 motion-fade"
              : "absolute inset-0 flex items-center justify-center whitespace-nowrap opacity-0 motion-fade"
          }
        >
          Copied
        </span>
        <span className="invisible whitespace-nowrap">{helperLabel}</span>
      </div>
      <span className="sr-only" aria-live="polite" role="status">
        {copied ? "Email copied to clipboard." : ""}
      </span>

      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy email address"
        className="inline-flex min-h-9 items-center justify-center rounded-xl bg-muted px-4 py-2 text-[0.96rem] text-foreground motion-surface-interaction hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none"
      >
        <span>{email}</span>
      </button>
    </div>
  )
}
