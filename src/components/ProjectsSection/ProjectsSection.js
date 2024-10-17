import { SectionBox } from "../../css/styled-components-general/Styles";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import { projectsList } from "./projects";
import { Project, ProjectsBox } from "./Styles";

const ProjectsSection = () => {
  return (
    <SectionBox primary id="projects">
      <div className="centerBox">
        <h2>PROYECTOS</h2>
        <ProjectsBox>
          {projectsList.map(project => {
            return (
          <Project>
            <figure className={project.bg}>
              <figcaption>{project.title}</figcaption>
            </figure>
            <p>{project.description}</p>
            <ProjectLinks 
              linkGithub={project.links.github && project.links.github}
              linkWeb={project.links.web && project.links.web}
            />
          </Project>

            )
          })}
        </ProjectsBox>
      </div>
    </SectionBox>
  );
};

export default ProjectsSection;
