import styled from "styled-components";
import { dark, light } from "../../modeStyles";
import sizes from "../../screenSizes";

const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  gap: 2em;
  letter-spacing: 1px;

  @media (max-width: ${sizes.mobile_tablet}) {
    position: absolute;
    top: 100%;
    right: -100%;
    flex-direction: column;
    align-items: flex-start;
    background-color: ${(props) =>
      props.theme === "dark" ? dark.background : light.background};
    z-index: 999999;
    transition: right 1.2s ease;
    box-shadow: -2px 2px 4px 0px rgba(0, 0, 0, 0.5);

    a {
      display: block;
      padding: 1.5rem 6rem 1.5rem 1.5rem;
      color: ${(props) => (props.theme === "dark" ? dark.color : light.color)};
    }

    &.active {
      right: 0;
      transition: right 0.5s ease;
    }
  }
`;
// background-color: ${(props) =>
//   props.theme === "dark" ? dark.background : light.background};

export { MenuList };
