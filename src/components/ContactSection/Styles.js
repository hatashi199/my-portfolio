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
    grid-template-rows: repeat(3, auto);
    gap: 1.2rem;

    label:first-child {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    label:nth-child(2) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }

    label:nth-child(3) {
      grid-column: 1 / span 2;
      grid-row: 2 / 3;
    }

    label:last-child {
      grid-column: 1 / span 2;
      grid-row: 3 / 4;
    }
  }
`;

export { ContactBox };
