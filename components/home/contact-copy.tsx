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

export function ContactCopy({ email }: { email: string }) {
  const [state, setState] = React.useState<"idle" | "hover" | "copied">("idle")
  const timeoutRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  function setHoverState() {
    if (state !== "copied") {
      setState("hover")
    }
  }

  function setIdleState() {
    if (state !== "copied") {
      setState("idle")
    }
  }

  function resetToIdle() {
    setState("idle")
    timeoutRef.current = null
  }

  async function handleCopy() {
    try {
      await copyTextToClipboard(email)
      setState("copied")

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = window.setTimeout(resetToIdle, 1800)
    } catch {
      resetToIdle()
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative flex h-5 w-full items-center justify-center overflow-hidden text-sm text-muted-foreground">
        <span
          className={
            state === "idle"
              ? "absolute inset-0 flex items-center justify-center whitespace-nowrap opacity-100 transition-opacity duration-200 ease-[var(--ease-out)]"
              : "absolute inset-0 flex items-center justify-center whitespace-nowrap opacity-0 transition-opacity duration-200 ease-[var(--ease-out)]"
          }
        >
          Want to get in touch?
        </span>
        <span
          className={
            state === "hover"
              ? "absolute inset-0 flex items-center justify-center whitespace-nowrap opacity-100 transition-opacity duration-200 ease-[var(--ease-out)]"
              : "absolute inset-0 flex items-center justify-center whitespace-nowrap opacity-0 transition-opacity duration-200 ease-[var(--ease-out)]"
          }
        >
          Click to copy
        </span>
        <span
          className={
            state === "copied"
              ? "absolute inset-0 flex items-center justify-center whitespace-nowrap opacity-100 transition-opacity duration-200 ease-[var(--ease-out)]"
              : "absolute inset-0 flex items-center justify-center whitespace-nowrap opacity-0 transition-opacity duration-200 ease-[var(--ease-out)]"
          }
        >
          Copied
        </span>
        <span className="invisible whitespace-nowrap">
          Want to get in touch?
        </span>
      </div>
      <span className="sr-only" aria-live="polite" role="status">
        {state === "copied" ? "Email copied to clipboard." : ""}
      </span>

      <button
        type="button"
        onClick={handleCopy}
        onPointerEnter={setHoverState}
        onPointerLeave={setIdleState}
        onFocus={setHoverState}
        onBlur={setIdleState}
        aria-label="Copy email address"
        className="inline-flex min-h-11 flex-col items-center justify-center rounded-[1.15rem] bg-muted px-6 py-3 text-lg text-foreground transition-[background-color,color,transform] duration-150 ease-[var(--ease-out)] hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none motion-safe:hover:-translate-y-px"
      >
        <span>{email}</span>
      </button>
    </div>
  )
}
