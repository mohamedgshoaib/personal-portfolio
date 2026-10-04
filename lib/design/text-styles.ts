export const textStyles = {
  articleBody:
    "space-y-6 text-base font-[450] leading-[1.65] text-muted-foreground [&_a]:text-foreground [&_a]:underline-offset-4 [&_a:hover]:underline [&_h2]:scroll-mt-24 [&_h2]:pt-6 [&_h2]:text-lg [&_h2]:font-medium [&_h2]:leading-7 [&_h2]:text-foreground [&_h3]:scroll-mt-24 [&_h3]:pt-3 [&_h3]:text-base [&_h3]:font-medium [&_h3]:leading-6 [&_h3]:text-foreground",
  archiveTitle:
    "text-xl font-medium tracking-normal text-balance text-foreground",
  detailTitle:
    "text-xl font-medium tracking-normal text-balance text-foreground",
  entityDescription:
    "text-base font-[450] leading-[1.6] text-pretty text-muted-foreground",
  entityTitle: "line-clamp-2 text-base font-medium leading-6 text-foreground",
  inlineMutedLink:
    "inline-block text-base font-normal text-muted-foreground transition-[color,scale] hover:text-foreground no-hover:text-foreground active:scale-[0.96] motion-reduce:active:scale-100",
  metadata: "text-sm font-normal text-muted-foreground",
  pageDescription:
    "max-w-prose text-base font-[450] leading-[1.6] text-pretty text-muted-foreground",
  pageTitle: "text-lg font-medium tracking-normal text-balance text-foreground",
  sectionTitle: "text-base font-medium text-balance text-foreground",
  smallDescription:
    "text-sm font-normal leading-5 text-pretty text-muted-foreground",
  tocHeading: "mb-4 text-sm font-normal text-muted-foreground",
  tocItem:
    "group grid min-h-8 grid-cols-[0.75rem_1fr] items-stretch rounded-md pr-2 text-sm font-normal text-muted-foreground transition-[color,opacity] duration-150 ease-[var(--ease-interface)] hover:text-foreground",
  tooltip: "text-sm font-normal",
} as const
