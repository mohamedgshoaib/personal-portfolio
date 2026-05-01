"use client"

import * as React from "react"

import { CopyIcon, type CopyIconHandle } from "@/components/ui/copy"
import { CheckIcon, type CheckIconHandle } from "@/components/ui/check"

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

  const copyIconRef = React.useRef<CopyIconHandle>(null)
  const checkIconRef = React.useRef<CheckIconHandle>(null)

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
      checkIconRef.current?.startAnimation()

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
        onMouseEnter={() => {
          if (copied) {
            checkIconRef.current?.startAnimation()
          } else {
            copyIconRef.current?.startAnimation()
          }
        }}
        onMouseLeave={() => {
          copyIconRef.current?.stopAnimation()
          checkIconRef.current?.stopAnimation()
        }}
        aria-label={copied ? "Article copied" : "Copy article"}
        className="text-button shrink-0 text-sm outline-none"
      >
        {copied ? (
          <>
            <span className="icon">
              <CheckIcon ref={checkIconRef} size={14} />
            </span>
            Article copied
          </>
        ) : (
          <>
            <span className="icon">
              <CopyIcon ref={copyIconRef} size={14} />
            </span>
            Copy article
          </>
        )}
      </button>
      <span className="sr-only" aria-live="polite" role="status">
        {copied ? "Article copied to clipboard." : ""}
      </span>
    </>
  )
}
