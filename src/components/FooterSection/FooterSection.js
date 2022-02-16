import { SectionBox } from "../../css/styled-components-general/Styles";
import { FooterBox } from "./Styles";

const FooterSection = () => {
  return (
    <SectionBox primary>
      <div className="centerBox">
        <FooterBox>
          <p>Desarrollado por Alejandro Mariño Fandiño</p>
        </FooterBox>
      </div>
    </SectionBox>
  );
};

export default FooterSection;
