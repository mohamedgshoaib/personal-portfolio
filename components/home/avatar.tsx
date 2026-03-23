import Image from "next/image"

export function Avatar() {
  return (
    <div className="relative size-14 overflow-hidden rounded-2xl bg-transparent sm:size-16">
      <Image
        src="/assets/avatar/avatar-light.png"
        alt="Portrait of Mohamed Gamal."
        fill
        sizes="(min-width: 640px) 4rem, 3.5rem"
        className="object-cover dark:hidden"
      />
      <Image
        src="/assets/avatar/avatar-dark.png"
        alt="Portrait of Mohamed Gamal."
        fill
        sizes="(min-width: 640px) 4rem, 3.5rem"
        className="hidden object-cover dark:block"
      />
    </div>
  )
}
