import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { PROJECTS } from "../../data/projects";
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel";
import { ProjectList } from "./project-list";

const MAX_PROJECTS_HOME = 4;

export function Projects() {
  const displayedProjects = PROJECTS.slice(0, MAX_PROJECTS_HOME);

  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          Projects
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <ProjectList projects={displayedProjects} />

      <div className="screen-line-before flex justify-center py-2">
        <Button className="px-3" variant="default" asChild>
          <Link href="/projects">
            All Projects
            <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </Panel>
  );
}
