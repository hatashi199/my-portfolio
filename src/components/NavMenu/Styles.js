import styled from "styled-components";
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
    background-color: var(--bg-light);
    z-index: 999999;
    transition: right 1.2s ease;
    box-shadow: -2px 2px 4px 0px rgba(0, 0, 0, 0.5);

    a {
      display: block;
      color: var(--color-text-main);
      padding: 1.5rem 6rem 1.5rem 1.5rem;
    }

    &.active {
      right: 0;
      transition: right 0.5s ease;
    }
  }
`;

export { MenuList };
