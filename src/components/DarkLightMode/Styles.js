import styled from "styled-components";
import { dark, light } from "../../modeStyles";
import sizes from "../../screenSizes";

const ModeDarkLightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${sizes.mobile_tablet}) {
    flex-direction: row-reverse;
    order: 1;
  }
`;

const ModeButton = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${(props) =>
    props.state === "dark" ? light.background : light.color};
  position: relative;
  display: flex;
  align-items: center;

  &:after,
  &:before {
    content: "";
    position: absolute;
    top: 0;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.state === "dark" ? light.background : light.color};
    cursor: pointer;
    z-index: 1;
  }

  &:after {
    right: -1.2rem;
  }

  &:before {
    left: -1.2rem;
  }

  .buttonCircle {
    position: absolute;
    width: 2.1rem;
    height: 2.1rem;
    background-color: ${(props) =>
      props.state === "dark" ? dark.background : light.background};
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 2;
  }

  ${(props) =>
    props.state === "dark"
      ? `.buttonCircle {
    right: -1rem;
  }`
      : `.buttonCircle {
    right: 1.3rem;
  }`}
`;

export { ModeButton, ModeDarkLightBox };
