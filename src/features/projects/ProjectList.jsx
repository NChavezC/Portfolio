import rawProjects from "./projects.txt?raw";
import ProjectCard from "./ProjectCard";

function ProjectsList() {
  // Parse the raw text into an array of project objects
  let projects = [];
  try {
    projects = JSON.parse(rawProjects);
  } catch (err) {
    console.error("Failed to parse projects.txt:", err);
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      {projects.map((proj) => (
        <ProjectCard key={proj.id} project={proj} />
      ))}
    </div>
  );
}
export default ProjectsList;
