import styled from "styled-components";

const AboutBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 6rem;

  p {
    line-height: 1.3rem;
    font-size: 1.1rem;
    width: 50%;
    text-align: center;
  }

  figure {
    width: 20%;

    img {
      width: 100%;
      display: block;
    }
  }
`;

export { AboutBox };
