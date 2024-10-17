import { SkillBox, SkillsBox } from "./Styles";
import { SectionBox } from "../../css/styled-components-general/Styles";
import { skillList } from "./skills";

const SkillsSection = ({ theme }) => {

  return (
    <SectionBox light id="skills" theme={theme}>
      <div className="centerBox">
        <h2>HABILIDADES</h2>
        <SkillsBox>
          { skillList.map(skill => {
            return (
              <SkillBox key={skill.label}>
                <skill.icon size="100%"/>
                <h3>{skill.label}</h3>
              </SkillBox>
            )
          })}
        </SkillsBox>
      </div>
    </SectionBox>
  );
};

export default SkillsSection;
