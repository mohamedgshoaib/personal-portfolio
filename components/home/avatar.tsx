import Image from "next/image"

export function Avatar() {
  return (
    <div className="relative size-12 overflow-hidden rounded-2xl bg-transparent sm:size-14">
      <Image
        src="/assets/avatar/avatar-light.png"
        alt="Portrait of Mohamed Gamal."
        fill
        sizes="(min-width: 640px) 3.5rem, 3rem"
        className="object-cover dark:hidden"
        fetchPriority="high"
      />
      <Image
        src="/assets/avatar/avatar-dark.png"
        alt="Portrait of Mohamed Gamal."
        fill
        sizes="(min-width: 640px) 3.5rem, 3rem"
        className="hidden object-cover dark:block"
        fetchPriority="high"
      />
    </div>
  )
}
