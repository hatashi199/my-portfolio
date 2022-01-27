import { SectionBox } from "../../css/styled-components-general/Styles";
import { Project, ProjectsBox } from "./Styles";

const ProjectsSection = () => {
  return (
    <SectionBox primary id="projects">
      <div className="centerBox">
        <h2>PROYECTOS</h2>
        <ProjectsBox>
          <Project>
            <figure>
              <figcaption>Nombre del Proyecto</figcaption>
            </figure>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Project>
          <Project>
            <figure>
              <figcaption>Nombre del Proyecto</figcaption>
            </figure>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Project>
          <Project>
            <figure>
              <figcaption>Nombre del Proyecto</figcaption>
            </figure>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Project>
        </ProjectsBox>
      </div>
    </SectionBox>
  );
};

export default ProjectsSection;
