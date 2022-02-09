import styled from "styled-components";

const AboutBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 6rem;

  .aboutText {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 50%;
  }

  p {
    line-height: 1.3rem;
    font-size: 1.1rem;
    text-align: center;
  }

  figure {
    width: 25%;

    img {
      width: 100%;
      display: block;
    }
  }
`;

export { AboutBox };
