"use client"

import Link from "next/link"
import type { LinkProps } from "next/link"
import { useRef } from "react"

import {
  ArrowRightIcon,
  type ArrowRightIconHandle,
} from "@/components/ui/arrow-right"

type NavLinkProps = Omit<React.ComponentPropsWithoutRef<"a">, "href"> &
  LinkProps & {
    children: React.ReactNode
  }

export function NavLink({ children, ...props }: NavLinkProps) {
  const iconRef = useRef<ArrowRightIconHandle>(null)

  return (
    <Link
      className="text-button"
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      {...props}
    >
      {children}
      <span className="external-icon">
        <ArrowRightIcon ref={iconRef} size={14} />
      </span>
    </Link>
  )
}
