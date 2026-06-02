import ProjectCard from "./ProjectCard";
import { getPinnedProjects, Project } from "@/services/github";

export default async function ProjectsList() {
  const projects = await getPinnedProjects();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
      {projects.map((project: Project) => (
            <ProjectCard
                key={project.id}
                title={project.name}
                description={project.description}
                githubLink={project.url}
                image={project.openGraphImageUrl}
                homepageUrl={project.homepageUrl}        
            />
        ))}
    </div>
  );
}