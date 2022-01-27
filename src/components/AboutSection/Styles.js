import styled from "styled-components";

const AboutBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
}
`;

const AboutFeature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 25%;

  h3 {
    font-size: 1.3rem;
    font-style: italic;
  }

  p {
    line-height: 1.3rem;
    font-size: 1.1rem;
    text-align: center;
  }
`;

export { AboutBox, AboutFeature };
