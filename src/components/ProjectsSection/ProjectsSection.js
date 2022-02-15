import { SectionBox } from "../../css/styled-components-general/Styles";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import { Project, ProjectsBox } from "./Styles";

const ProjectsSection = () => {
  return (
    <SectionBox primary id="projects">
      <div className="centerBox">
        <h2>PROYECTOS</h2>
        <ProjectsBox>
          <Project>
            <figure className="experiencias">
              <figcaption>VAN Experiences</figcaption>
            </figure>
            <p>
              Proyecto desarrollado en NodeJS (Backend) y ReactJS (Frontend) que
              realicé como proyecto final del bootcamp. Aplico todos mis
              conocimientos aprendidos para realizar este proyecto real. (No
              responsive)
            </p>
            <ProjectLinks linkGithub="https://github.com/vanexperiences/proyecto_experiencias" />
          </Project>
          <Project>
            <figure className="pokedexAmf">
              <figcaption>Pokédex Personal</figcaption>
            </figure>
            <p>
              Proyecto desarrollado en ReactJS y JavaScript utilizando la API
              pública de Pokémon donde continuo aprendiendo y practicando más
              cosas de React. (No responsive)
            </p>
            <ProjectLinks linkGithub="https://github.com/hatashi199/pokedexProject" />
          </Project>
          <Project>
            <figure className="portfolioAmf">
              <figcaption>Portfolio Personal</figcaption>
            </figure>
            <p>
              Proyecto desarrollado en ReactJS y JavaScript en el realicé mi
              portfolio personal donde muestro todos los conocimientos,
              proyectos y habilidades conocidas.
            </p>
            <ProjectLinks linkGithub="https://github.com/hatashi199/portfolio-amf" />
          </Project>
        </ProjectsBox>
      </div>
    </SectionBox>
  );
};

export default ProjectsSection;
