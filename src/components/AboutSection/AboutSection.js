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
              Mi nombre es Alejandro Mariño Fandiño, soy Desarrollador web
              Full-Stack Junior especializado en JavaScript y ReactJS, pero
              estoy abierto a seguir aprendiendo otros lenguajes de programación
              o frameworks.
            </p>
            <p>
              Desde que acabé mi etaba en bachillerato siempre me interesé por
              la informática y decidí hacer una formación profesional de grado
              superior en ASIR (Administración de Sistemas Informáticos en Red).
              Ahí fue donde descubrí y me interesé mucho por la parte de
              programación web gracias a HTML, CSS y PHP, por eso, una vez
              finalizado la formación profesional decidí seguir adquiriendo
              nuevos conocimientos a través de cursos y un bootcamp de
              JavaScript.
            </p>
            <p>
              Espero tener la oportunidad de aplicar mis conocimientos en
              programación web en los proyectos futuros que realice.
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
