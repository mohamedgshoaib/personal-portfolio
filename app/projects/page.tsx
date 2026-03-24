import { DisclosureList } from "@/components/home/disclosure-list"
import { projects, siteProfile } from "@/lib/content/site-content"
import { createPageMetadata } from "@/lib/metadata/site-metadata"

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Selected frontend work across product sites, internal systems, and interfaces shaped by structure, design quality, and implementation discipline.",
  path: "/projects",
})

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-[42rem] flex-col px-6 pt-10 pb-16 sm:px-8 sm:pt-14">
      <div className="space-y-12 sm:space-y-16">
        <header className="space-y-5">
          <p className="text-sm font-medium text-foreground">Projects</p>
          <div className="max-w-[33rem] space-y-4 text-[0.96rem] leading-8 text-muted-foreground">
            <p>
              A selection of frontend work across product websites, internal
              tooling, and interface-heavy builds.
            </p>
            <p>
              The common thread is care: clear planning, strong visual
              hierarchy, and implementation that stays stable as the product
              grows.
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
