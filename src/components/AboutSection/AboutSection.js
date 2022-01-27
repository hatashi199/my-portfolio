import { AboutBox, AboutFeature } from "./Styles";
import { BsCodeSlash } from "react-icons/bs";
import { SectionBox } from "../../css/styled-components-general/Styles";

const AboutSection = () => {
  return (
    <SectionBox primary id="aboutMe">
      <div className="centerBox">
        <h2>SOBRE MI</h2>
        <AboutBox>
          <AboutFeature>
            <BsCodeSlash size="4rem" />
            <h3>Lorem_1</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </AboutFeature>
          <AboutFeature>
            <BsCodeSlash size="4rem" />
            <h3>Lorem_2</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </AboutFeature>
          <AboutFeature>
            <BsCodeSlash size="4rem" />
            <h3>Lorem_3</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </AboutFeature>
        </AboutBox>
      </div>
    </SectionBox>
  );
};

export default AboutSection;
