import styled from "styled-components";

const LinkButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-primary);
  padding: 0.8rem 1.2rem;
  border-radius: 4px;
  font-size: 1.2rem;
  width: 100%;
  ${(props) =>
    props.primary
      ? `
        background-color: var(--color-primary);
        color: var(--color-white);
    `
      : `
    background-color: var(--bg-light);
    color: var(--color-primary);
    `};
`;

export { LinkButton };
