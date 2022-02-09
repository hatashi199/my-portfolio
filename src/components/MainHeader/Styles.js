import styled from "styled-components";

const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: transparent;
  transition: all 0.3s ease;
  z-index: 9999;

  a {
    color: var(--color-white);
  }
`;

const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: var(--center-size);

  figure {
    width: 8rem;
    display: flex;
    align-items: center;

    & > img {
      width: 100%;
      display: block;
    }
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ResponsiveNav = styled.nav`
  display: none;

  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after,
  .hamburger.is-active .hamburger-inner::before,
  .hamburger.is-active .hamburger-inner::after {
    background-color: var(--bg-light);
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;

export { HeaderSection, BoxHeader, DesktopNav, ResponsiveNav };
