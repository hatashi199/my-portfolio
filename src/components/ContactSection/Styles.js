import styled from "styled-components";
import sizes from "../../screenSizes";

const ContactBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  .contactList {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      color: var(--color-text-main);
      display: flex;
      aling-items: center;
      gap: 2rem;
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
      font-size: 1.3rem;
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

  @media (max-width: ${sizes.tablet_desktop}) {
    flex-direction: column;
    align-items: center;
    gap: 4rem;

    .contactList {
      flex-direction: row;
      align-items: center;

      a {
        gap: 0.5rem;
      }
    }
  }

  @media (max-width: ${sizes.mobile}) {
    .contactForm {
      grid-template-columns: auto;
      width: 100%;

      .inputElement:nth-child(1) {
        grid-column: 1 / span 2;
      }

      .inputElement:nth-child(2) {
        grid-column: 1 / span 2;
        grid-row: 2 / 3;
      }

      .inputElement:nth-child(3) {
        grid-row: 3 / 4;
      }

      .inputElement:nth-child(4) {
        grid-row: 4 / 5;
      }
    }
  }
`;

const ButtonForm = styled.input`
  grid-column: 1 / span 2;
  grid-row: 4 / 5;
  background-color: var(--color-primary);
  color: var(--color-white);
  border: 0;
  padding: 0.8rem 1.2rem;
  border-radius: 4px;
  font-size: 1.4rem;
  cursor: pointer;

  @media (max-width: ${sizes.mobile}) {
    grid-row: 5 / 6;
  }
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
