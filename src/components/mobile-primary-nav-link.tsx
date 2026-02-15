"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function MobilePrimaryNavLink({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  const pathname = usePathname();
  const active = pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium text-muted-foreground transition-[color] duration-300 sm:hidden",
        active && "text-foreground"
      )}
    >
      {title}
    </Link>
  );
}
