import { TextLink } from "@/components/home/text-link"

export function PostHeaderLinks() {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
      <TextLink href="/">Home</TextLink>
      <TextLink href="/writing">Back to writings</TextLink>
    </div>
  )
}
