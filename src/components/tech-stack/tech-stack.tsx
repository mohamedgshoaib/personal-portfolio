"use client";

import { portfolioData } from "@/lib/portfolio-data";

export function TechStack() {
  const { techStack } = portfolioData;

  return (
    <section
      id="tech-stack"
      className="border-t border-dashed border-border pt-16 pb-16"
    >
      <div>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {techStack.map((tech, index) => {
            const isLeftColumn = index % 2 === 0;
            const borderClasses = isLeftColumn
              ? "border-y border-r border-border"
              : "border-y border-l border-border";

            return (
              <div
                key={tech.name}
                className={`flex items-center gap-3 ${borderClasses} bg-card px-4 py-3`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 shrink-0"
                  aria-hidden="true"
                >
                  <path d={tech.svg} />
                </svg>
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
