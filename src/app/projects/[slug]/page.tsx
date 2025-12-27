import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { portfolioData } from "@/lib/portfolio-data";
import { Link01Icon, Github01Icon } from "@hugeicons/core-free-icons";

// Project type
interface ProjectData {
  id: string;
  type: "client" | "personal";
  name: string;
  description: string;
  fullDescription: string;
  image: string;
  websiteUrl: string;
  repositoryUrl: string | null;
  architecture: string;
  problem: string;
  solution: string;
  techStack: readonly string[];
}

function getProject(slug: string): ProjectData | undefined {
  const project = portfolioData.projects.featured.find((p) => p.id === slug);
  return project as ProjectData | undefined;
}

// Generate static params for all projects
export function generateStaticParams() {
  return portfolioData.projects.featured.map((project) => ({
    slug: project.id,
  }));
}

// Generate metadata for each project
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.name,
    description: project.fullDescription ?? project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
    return null;
  }

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
                    <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{project.name}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Header */}
            <div className="mb-8">
              <Badge
                variant="outline"
                className="mb-3 h-auto px-2 py-0.5 text-xs"
              >
                {project.type === "personal"
                  ? "Personal Project"
                  : "Client Work"}
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                {project.name}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative mb-8 aspect-video w-full overflow-hidden border border-border bg-muted">
              <Image
                src={project.image}
                alt={project.name}
                fill
                priority
                quality={95}
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>

            {/* Links */}
            <div className="mb-12 flex flex-wrap gap-4">
              <Link
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Icon icon={Link01Icon} size={16} />
                Visit Website
              </Link>
              {project.repositoryUrl && (
                <Link
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Icon icon={Github01Icon} size={16} />
                  View Repository
                </Link>
              )}
            </div>

            {/* Case Study Content */}
            <div className="space-y-8">
              {/* Problem */}
              {project.problem && (
                <section>
                  <h2 className="mb-3 text-xl font-semibold">The Problem</h2>
                  <p className="text-muted-foreground">{project.problem}</p>
                </section>
              )}

              {/* Solution */}
              {project.solution && (
                <section>
                  <h2 className="mb-3 text-xl font-semibold">The Solution</h2>
                  <p className="text-muted-foreground">{project.solution}</p>
                </section>
              )}

              {/* Architecture */}
              {project.architecture && (
                <section>
                  <h2 className="mb-3 text-xl font-semibold">Architecture</h2>
                  <p className="text-muted-foreground">
                    {project.architecture}
                  </p>
                </section>
              )}

              {/* Tech Stack */}
              {project.techStack && project.techStack.length > 0 && (
                <section>
                  <h2 className="mb-3 text-xl font-semibold">Tech Stack</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="px-2 py-1 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
