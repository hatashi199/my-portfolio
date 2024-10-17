import styled from "styled-components";
import { dark, light } from "../../modeStyles";
import sizes from "../../screenSizes";

const SectionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8rem 0rem;

  .centerBox {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: var(--center-size);

    h2 {
      font-size: 1.8rem;
      text-align: center;
    }
  }

  ${(props) =>
    props.primary &&
    `& {
        background-color: var(--bg-primary);
        color: var(--color-white);
    }`};

  ${(props) =>
    props.light &&
    `& {
        background-color: ${
          props.theme === "dark" ? dark.background : light.background
        };
        color: ${props.theme === "dark" ? dark.color : light.color};
    }`};

  @media (max-width: ${sizes.mobile_tablet}) {
    padding: 4rem 0rem;

    .centerBox {
      width: var(--center-size-mobile);
    }
  }
`;

export { SectionBox };
