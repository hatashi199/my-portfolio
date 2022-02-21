import { SkillBox, SkillsBox } from "./Styles";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiPhp } from "react-icons/di";
import {
  SiJavascript,
  SiMysql,
  SiExpress,
  SiTypescript,
  SiRedux,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SectionBox } from "../../css/styled-components-general/Styles";

const SkillsSection = ({ theme }) => {
  return (
    <SectionBox light id="skills" theme={theme}>
      <div className="centerBox">
        <h2>HABILIDADES</h2>
        <SkillsBox>
          <SkillBox>
            <AiFillHtml5 size="8rem" />
            <h3>HTML5</h3>
          </SkillBox>
          <SkillBox>
            <DiCss3 size="8rem" />
            <h3>CSS3</h3>
          </SkillBox>
          <SkillBox>
            <DiPhp size="8rem" />
            <h3>PHP</h3>
          </SkillBox>
          <SkillBox>
            <SiJavascript size="8rem" />
            <h3>JavaScript</h3>
          </SkillBox>
          <SkillBox>
            <SiTypescript size="8rem" />
            <h3>TypeScript</h3>
          </SkillBox>
          <SkillBox>
            <SiMysql size="8rem" />
            <h3>MySQL</h3>
          </SkillBox>
          <SkillBox>
            <FaReact size="8rem" />
            <h3>React</h3>
          </SkillBox>
          <SkillBox>
            <SiRedux size="8rem" />
            <h3>Redux</h3>
          </SkillBox>
          <SkillBox>
            <FaNodeJs size="8rem" />
            <h3>NodeJS</h3>
          </SkillBox>
          <SkillBox>
            <SiExpress size="8rem" />
            <h3>ExpressJS</h3>
          </SkillBox>
        </SkillsBox>
      </div>
    </SectionBox>
  );
};

export default SkillsSection;
