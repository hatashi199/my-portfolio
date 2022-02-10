import { BoxHeader, HeaderSection, DesktopNav, ResponsiveNav } from "./Styles";
import Logo from "../../assets/Logo.svg";
import NavMenu from "../NavMenu/NavMenu";
import { useEffect, useState } from "react";

const MainHeader = () => {
  const [scroll, setScroll] = useState(false);
  const [sidebarMenu, setSidebarMenu] = useState(false);

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

  const showResponsiveMenu = () => {
    setSidebarMenu(!sidebarMenu);
  };

  return (
    <HeaderSection className={scroll && scrollStyle}>
      <div className="containerNoFixed">
        <BoxHeader>
          <figure>
            <img src={Logo} alt="main-logo" />
          </figure>
          <DesktopNav>
            <NavMenu />
          </DesktopNav>
          <ResponsiveNav onClick={showResponsiveMenu}>
            <div
              className={
                sidebarMenu
                  ? "hamburger hamburger--3dx is-active"
                  : "hamburger hamburger--3dx"
              }
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
            <NavMenu activeClass={sidebarMenu} />
          </ResponsiveNav>
        </BoxHeader>
      </div>
    </HeaderSection>
  );
};

export default MainHeader;
