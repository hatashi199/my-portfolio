import styled from "styled-components";
import bgProjectDefault from "../../assets/snapshotEx.png";
import pokedexPng from "../../assets/pokedexAmf.png";
import portfolioPng from "../../assets/portfolio.png";

const ProjectsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 4rem;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 25rem;

  figure.pokedexAmf {
    background-image: url(${pokedexPng});
  }

  figure.portfolioAmf {
    background-image: url(${portfolioPng});
  }

  figure {
    background-image: url(${bgProjectDefault});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: flex-end;
    border-radius: 4px;
    width: 100%;
    height: 17rem;

    figcaption {
      background-color: var(--bg-light);
      color: var(--color-text-main);
      width: 100%;
      text-align: center;
      padding: 1rem 0rem;
      font-size: 1.4rem;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
    }
  }

  p {
    line-height: 1.3rem;
    font-size: 1.1rem;
    text-align: center;
  }
`;

export { ProjectsBox, Project };
