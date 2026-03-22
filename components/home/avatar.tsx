import Image from "next/image"

export function Avatar() {
  return (
    <div className="relative size-16 overflow-hidden rounded-2xl border border-border/80 bg-card shadow-[var(--surface-shadow-sm)] sm:size-20">
      <Image
        src="/assets/avatar/avatar-light.webp"
        alt="Portrait of Mohamed Gamal."
        fill
        sizes="(min-width: 640px) 5rem, 4rem"
        className="object-cover dark:hidden"
        priority
      />
      <Image
        src="/assets/avatar/avatar-dark.webp"
        alt="Portrait of Mohamed Gamal."
        fill
        sizes="(min-width: 640px) 5rem, 4rem"
        className="hidden object-cover dark:block"
        priority
      />
    </div>
  )
}
