import styled from "styled-components";
import sizes from "../../screenSizes";

const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  gap: 2em;
  letter-spacing: 1px;

  @media (max-width: ${sizes.mobile_tablet}) {
    position: fixed;
    top: 0;
    right: -100%;
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--bg-light);
    z-index: 999999;

    a {
      color: var(color-text-main);
    }

    &.active {
      right: 0;
    }
  }
`;

export { MenuList };
