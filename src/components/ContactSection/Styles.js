import styled from "styled-components";

const ContactBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  .contactList {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    a {
      color: var(--color-text-main);
      display: flex;
      aling-items: center;
      gap: 2rem;

      span {
        font-size: 1.2rem;
      }
    }
  }

  .contactForm {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, auto);
    gap: 1.2rem;

    .inputElement {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
    }

    .inputElement:nth-child(1) {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    .inputElement:nth-child(2) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }

    .inputElement:nth-child(3) {
      grid-column: 1 / span 2;
      grid-row: 2 / 3;
    }

    .inputElement:nth-child(4) {
      grid-column: 1 / span 2;
      grid-row: 3 / 4;
    }

    .errorMessage {
      color: var(--error-color);
      font-size: 0.8rem;
      font-weight: 700;
    }
  }
`;

const ButtonForm = styled.input`
  grid-column: 1 / 2;
  grid-row: 4 / 5;
  background-color: var(--color-primary);
  color: var(--color-white);
  border: 0;
  padding: 0.8rem 1.2rem;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
`;

const EmailSent = styled.p`
  grid-column: 1 / span 2;
  grid-row: 5 / 6;
  background-color: var(--bg-success-email);
  color: var(--color-white);
  align-self: center;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  text-align: center;
  border-radius: 4px;
  line-height: 1.3rem;
`;

export { ContactBox, ButtonForm, EmailSent };
