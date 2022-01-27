import { BoxHeader, HeaderSection, DesktopNav } from "./Styles";
import Logo from "../../assets/Logo.svg";
import NavMenu from "../NavMenu/NavMenu";
import { useEffect, useState } from "react";

const MainHeader = () => {
  const [scroll, setScroll] = useState(false);

  const scrollStyle = scroll
    ? "scrollMainHeader_StylesTrue"
    : "scrollMainHeader_StylesFalse";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 25) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <HeaderSection className={scroll && scrollStyle}>
      <BoxHeader>
        <figure>
          <img src={Logo} alt="main-logo" />
        </figure>
        <DesktopNav>
          <NavMenu />
        </DesktopNav>
      </BoxHeader>
    </HeaderSection>
  );
};

export default MainHeader;
