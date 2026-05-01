"use client"

import Link from "next/link"
import { useRef } from "react"
import { HomeIcon, type HomeIconHandle } from "@/components/ui/home"
import {
  ArrowLeftIcon,
  type ArrowLeftIconHandle,
} from "@/components/ui/arrow-left"

export function PostHeaderLinks() {
  const homeRef = useRef<HomeIconHandle>(null)
  const backRef = useRef<ArrowLeftIconHandle>(null)

  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm">
      <Link
        href="/"
        className="text-button"
        onMouseEnter={() => homeRef.current?.startAnimation()}
        onMouseLeave={() => homeRef.current?.stopAnimation()}
      >
        <span className="icon">
          <HomeIcon ref={homeRef} size={14} />
        </span>
        Home
      </Link>
      <Link
        href="/writing"
        className="text-button"
        onMouseEnter={() => backRef.current?.startAnimation()}
        onMouseLeave={() => backRef.current?.stopAnimation()}
      >
        <span className="icon">
          <ArrowLeftIcon ref={backRef} size={14} />
        </span>
        Back to writings
      </Link>
    </div>
  )
}
