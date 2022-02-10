import styled from "styled-components";
import sizes from "../../screenSizes";

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

  @media (max-width: ${sizes.mobile_tablet}) {
    flex-direction: column;

    .aboutText {
      width: 80%;
    }

    figure {
      width: 30%;
    }
  }

  @media (max-width: ${sizes.mobile}) {
    .aboutText {
      width: 90%;
    }

    figure {
      width: 40%;
    }
  }
`;

export { AboutBox };
