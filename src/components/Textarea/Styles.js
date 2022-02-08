import styled from "styled-components";

const TextareaElement = styled.textarea`
  width: 100%;
  height: 8rem;
  border: 0;
  background-color: var(--bg-light);
  background-color: var(--bg-form-items);
  padding: 0.3rem 0.5rem;
  font-size: 1.3rem;
  color: var(--color-text-main);
  resize: none;

  &:focus {
    outline-width: 0px;
  }
`;

export { TextareaElement };
