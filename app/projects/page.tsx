import type { Metadata } from "next"

import { DisclosureList } from "@/components/home/disclosure-list"
import { projects, siteProfile } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected frontend projects focused on performance, SEO, RTL support, and maintainable implementation.",
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-[42rem] flex-col px-6 pt-10 pb-16 sm:px-8 sm:pt-14">
      <div className="space-y-12 sm:space-y-16">
        <header className="space-y-5">
          <p className="text-sm font-medium text-foreground">Projects</p>
          <div className="max-w-[33rem] space-y-4 text-[0.96rem] leading-8 text-muted-foreground">
            <p>
              Selected work focused on fast frontend systems, SEO-aware
              architecture, RTL support, and interfaces that stay maintainable
              as products grow.
            </p>
            <p>
              I care about implementation details as much as the final surface,
              so each project reflects both product thinking and engineering
              discipline.
            </p>
          </div>
        </header>

        <section className="space-y-5">
          <DisclosureList type="projects" items={projects} />
        </section>
      </div>

      <footer className="mt-auto pt-16 text-sm text-muted-foreground">
        <p>
          Work by {siteProfile.name}. Based in {siteProfile.location}.
        </p>
      </footer>
    </main>
  )
}
