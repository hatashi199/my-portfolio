import { AboutBox } from "./Styles";
import { SectionBox } from "../../css/styled-components-general/Styles";
import aboutPic from "../../assets/about-pic.png";

const AboutSection = () => {
  return (
    <SectionBox primary id="aboutMe">
      <div className="centerBox">
        <h2>SOBRE MI</h2>
        <AboutBox>
          <div className="aboutText">
            <p>
            Mi nombre es Alejandro Mariño Fandiño, soy Desarrollador Web Full-Stack Junior especializado en JavaScript y ReactJS, aunque siempre estoy abierto a aprender y dominar nuevos lenguajes de programación y frameworks.
            </p>
            <p>
            Desde que finalicé mi etapa en bachillerato, mi interés por la informática me llevó a realizar una formación profesional de grado superior en Administración de Sistemas Informáticos en Red (ASIR). Durante esta formación, descubrí mi pasión por la programación web, especialmente con HTML, CSS y PHP. Este interés me impulsó a continuar mi educación, realizando varios cursos y un bootcamp enfocado en JavaScript.
            </p>
            <p>
            En mi trayectoria, he desarrollado una sólida comprensión de la programación web, aplicando mis conocimientos en proyectos diversos. Mi objetivo es seguir creciendo como desarrollador, contribuyendo con mis habilidades y aprendiendo de cada experiencia. Estoy entusiasmado por las oportunidades futuras donde pueda aplicar y expandir mis conocimientos en programación web.
            </p>
          </div>
          <figure>
            <img src={aboutPic} alt="about-pic" />
          </figure>
        </AboutBox>
      </div>
    </SectionBox>
  );
};

export default AboutSection;
