import styled from "styled-components";
import frontPhoto from "../../assets/frontPhoto.jpg";
import frontBackground from "../../assets/frontBackground.jpg";
import sizes from "../../screenSizes";

const FrontBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  width: 100%;
  height: 100vh;
  background-image: url(${frontBackground});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  color: var(--color-white);

  .bg_blackLight {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .frontBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--center-size);
    gap: 6rem;

    .frontPhoto {
      background-image: url(${frontPhoto});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center -25px;
      border-radius: 4px;
      width: 15rem;
      height: 20rem;
    }

    .frontText {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      width: 60%;

      .typedStyle {
        font-weight: 700;
        font-size: 4rem;
      }

      h3 {
        font-size: 2rem;
      }

      .littleDesc {
        font-style: italic;
        font-size: 1.5rem;
      }

      .contactLinks {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-top: 2rem;
        width: 100%;
      }
    }

    figure {
      border-radius: 50%;
      overflow: hidden;
      width: 20%;

      img {
        display: block;
        width: 100%;
      }
    }
  }

  @media (max-width: ${sizes.mobile_tablet}) {
    .frontBox {
      flex-direction: column;
      align-items: center;
      width: var(--center-size-mobile);

      .frontText {
        align-items: center;
        text-align: center;
        width: 100%;

        .contactLinks {
          justify-content: center;
        }
      }
    }
  }

  @media (max-width: ${sizes.mobile}) {
    .frontText {
      width: 100%;
    }
    .contactLinks {
      flex-direction: column;

      a {
        width: 100%;
      }
    }
  }
`;

export { FrontBox };
