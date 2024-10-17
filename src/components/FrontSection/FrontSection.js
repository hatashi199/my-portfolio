import { LinkButton } from "../LinkButton/LinkButton";
import { FrontBox } from "./Styles";
import cv from "../../assets/cv/CV_AlejandroMariño_v9.pdf";
import Typed from "react-typed";

const FrontSection = () => {
  return (
    <FrontBox id="home">
      <div className="bg_blackLight">
        <div className="frontBox">
          <div className="frontPhoto"></div>
          <div className="frontText">
            <Typed
              strings={[
                "Hola,",
                "Soy Alejandro Mariño",
                "Bienvenido/a a mi portfolio",
              ]}
              typeSpeed={30}
              startDelay={1000}
              backSpeed={60}
              backDelay={2000}
              loop={true}
              className="typedStyle"
            />
            <h3>Desarrollador Web Full-Stack Junior</h3>
            <p className="littleDesc">
              'Joven programador con ganas de aprender y seguir creciendo'
            </p>
            <div className="contactLinks">
              <LinkButton primary href="#contact">
                <span>Contáctame</span>
              </LinkButton>
              <LinkButton href={cv} download="CV_AlejandroMariño.pdf">
                <span>Descargar CV</span>
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </FrontBox>
  );
};

export default FrontSection;
