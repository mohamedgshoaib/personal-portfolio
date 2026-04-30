"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"

const AUDIO_MUTED_STORAGE_KEY = "portfolio-audio-muted"

const CLICKABLE_SELECTOR = [
  "a[href]",
  "button",
  "input:not([type='hidden'])",
  "select",
  "summary",
  "textarea",
  "[data-slot='button']",
  "[role='button']",
  "[role='link']",
  "[role='menuitem']",
  "[role='option']",
  "[role='radio']",
  "[role='switch']",
  "[role='tab']",
].join(", ")

async function playClickSound() {
  const [{ playSound }, { click005Sound }] = await Promise.all([
    import("@/lib/audio/sound-engine"),
    import("@/lib/audio/click-005"),
  ])

  await playSound(click005Sound.dataUri)
}

async function warmInteractionSounds() {
  const [
    { preloadSound },
    { click005Sound },
    { switchOnSound },
    { switchOffSound },
  ] = await Promise.all([
    import("@/lib/audio/sound-engine"),
    import("@/lib/audio/click-005"),
    import("@/lib/audio/switch-on"),
    import("@/lib/audio/switch-off"),
  ])

  await Promise.all([
    preloadSound(click005Sound.dataUri),
    preloadSound(switchOnSound.dataUri),
    preloadSound(switchOffSound.dataUri),
  ])
}

async function playThemeToggleSound(nextTheme: "light" | "dark") {
  const { playSound } = await import("@/lib/audio/sound-engine")

  if (nextTheme === "light") {
    const { switchOnSound } = await import("@/lib/audio/switch-on")
    await playSound(switchOnSound.dataUri)
    return
  }

  const { switchOffSound } = await import("@/lib/audio/switch-off")
  await playSound(switchOffSound.dataUri)
}

type AudioPreferencesContextValue = {
  muted: boolean
  setMuted: React.Dispatch<React.SetStateAction<boolean>>
}

const AudioPreferencesContext =
  React.createContext<AudioPreferencesContextValue | null>(null)

function useAudioPreferences() {
  const context = React.useContext(AudioPreferencesContext)

  if (!context) {
    throw new Error("useAudioPreferences must be used within ThemeProvider")
  }

  return context
}

function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [muted, setMuted] = React.useState(false)

  React.useEffect(() => {
    const stored = window.localStorage.getItem(AUDIO_MUTED_STORAGE_KEY)

    if (stored === "true") {
      setMuted(true)
    }
  }, [])

  React.useEffect(() => {
    window.localStorage.setItem(AUDIO_MUTED_STORAGE_KEY, String(muted))
  }, [muted])

  const value = React.useMemo(() => ({ muted, setMuted }), [muted])

  return (
    <AudioPreferencesContext.Provider value={value}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        {...props}
      >
        <ClickSound />
        <ThemeHotkey />
        {children}
      </NextThemesProvider>
    </AudioPreferencesContext.Provider>
  )
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT"
  )
}

function isDisabledTarget(target: HTMLElement) {
  return (
    target.dataset.clickSound === "off" ||
    target.matches(":disabled, [aria-disabled='true'], [data-disabled]")
  )
}

function getClickableTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return null
  }

  const clickable = target.closest(CLICKABLE_SELECTOR)

  if (!(clickable instanceof HTMLElement) || isDisabledTarget(clickable)) {
    return null
  }

  return clickable
}

function ClickSound() {
  const { muted } = useAudioPreferences()

  React.useEffect(() => {
    if (muted) {
      return
    }

    let cancelled = false
    let idleId: number | null = null
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    function warm() {
      if (cancelled) {
        return
      }

      void warmInteractionSounds()
    }

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(warm, { timeout: 1200 })
    } else {
      timeoutId = globalThis.setTimeout(warm, 240)
    }

    return () => {
      cancelled = true

      if (idleId !== null && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId)
      }

      if (timeoutId !== null) {
        globalThis.clearTimeout(timeoutId)
      }
    }
  }, [muted])

  const onClick = React.useEffectEvent((event: MouseEvent) => {
    if (muted || !getClickableTarget(event.target)) {
      return
    }

    void playClickSound()
  })

  React.useEffect(() => {
    document.addEventListener("click", onClick, true)

    return () => {
      document.removeEventListener("click", onClick, true)
    }
  }, [])

  return null
}

function ThemeHotkey() {
  const { resolvedTheme, setTheme } = useTheme()
  const { muted } = useAudioPreferences()

  const toggleTheme = React.useEffectEvent(() => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark"

    if (!muted) {
      void playThemeToggleSound(nextTheme)
    }

    setTheme(nextTheme)
  })

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.repeat) {
        return
      }

      if (event.metaKey || event.ctrlKey || event.altKey) {
        return
      }

      if (event.key.toLowerCase() !== "d") {
        return
      }

      if (isTypingTarget(event.target)) {
        return
      }

      toggleTheme()
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [])

  return null
}

export { ThemeProvider, useAudioPreferences }
