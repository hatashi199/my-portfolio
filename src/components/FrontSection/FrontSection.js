import { LinkButton } from "../LinkButton/LinkButton";
import { FrontBox } from "./Styles";

const FrontSection = () => {
  return (
    <FrontBox id="home">
      <div className="bg_blackLight">
        <div className="frontBox">
          <div className="frontPhoto"></div>
          <div className="frontText">
            <h1>Hola,</h1>
            <h1>soy Alejandro Mariño</h1>
            <h3>Desarrollador Web Full-Stack Junior</h3>
            <p className="littleDesc">
              'Joven desarrollador con ganas de aprender'
            </p>
            <div className="contactLinks">
              <LinkButton primary href="#contact">
                <span>Contáctame</span>
              </LinkButton>
              <LinkButton href="#" download="CV_AlejandroMariño.pdf">
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
