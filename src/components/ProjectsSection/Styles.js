import styled from "styled-components";
import pokedexPng from "../../assets/pokedexAmf.png";
import portfolioPng from "../../assets/portfolio.png";
import experienciasPng from "../../assets/experiencias.png";
import cobaltoMod from "../../assets/cobaltoModules.png";
import ticTacToe from "../../assets/ticTacToe.png";

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

  figure.experiencias {
    background-image: url(${experienciasPng});
  }

  figure.cobaltoMod {
    background-image: url(${cobaltoMod});
  }

  figure.ticTacToe {
    background-image: url(${ticTacToe});
  }

  figure {
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
      font-weight: 600;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
    }
  }

  p {
    line-height: 1.4rem;
    font-size: 1.2rem;
    text-align: justify;
  }
`;

export { ProjectsBox, Project };
