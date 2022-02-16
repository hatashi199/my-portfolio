import styled from "styled-components";

const LabelInput = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  border-radius: 4px;
  padding: 0.8rem 0.8rem 0.4rem 0.8rem;
  background-color: var(--bg-form-items);
`;

const InputElement = styled.input`
  width: 100%;
  border: 0;
  background-color: var(--bg-form-items);
  padding: 0.3rem 0.5rem;
  font-size: 1.3rem;
  color: var(--color-text-main);

  &:focus {
    outline-width: 0px;
  }
`;

export { InputElement, LabelInput };
