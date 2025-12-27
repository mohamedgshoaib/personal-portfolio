import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { portfolioData } from "@/lib/portfolio-data";

export const metadata = {
  title: "Projects",
  description:
    "A collection of client work and personal projects showcasing web development, design systems, and full-stack applications.",
};

export default function ProjectsPage() {
  const { projects } = portfolioData;
  const allProjects = projects.featured;

  return (
    <>
      <Navbar />
      <main className="bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl border-x border-border px-4 pt-16 pb-16">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Breadcrumb>
                <BreadcrumbList className="justify-center">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Projects</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Projects
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Client work and personal projects. Click any project for the
                full case study.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {allProjects.map((project) => (
                <article key={project.id} className="group relative">
                  <Link
                    href={`/projects/${project.id}`}
                    className="block border border-border bg-card transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {/* Image */}
                    <div className="relative aspect-video w-full overflow-hidden bg-muted">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <Badge
                        variant="outline"
                        className="mb-2 h-auto px-1.5 py-0 text-[10px]"
                      >
                        {project.type === "personal"
                          ? "Personal"
                          : "Client Work"}
                      </Badge>
                      <h2 className="mb-1 text-lg font-semibold tracking-tight">
                        {project.name}
                      </h2>
                      <p className="line-clamp-2 text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
