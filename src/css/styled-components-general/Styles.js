import styled from "styled-components";
import sizes from "../../screenSizes";

const SectionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0rem;

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
        background-color: var(--bg-light);
        color: var(--color-text-main);
    }`};

  @media (max-width: ${sizes.mobile_tablet}) {
    .centerBox {
      width: var(--center-size-mobile);
    }
  }
`;

export { SectionBox };
