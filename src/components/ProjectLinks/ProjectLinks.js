import { LinkBox } from "./Styles";
import { BsGithub, BsLink } from "react-icons/bs";

const ProjectLinks = ({ linkGithub, linkWeb }) => {
  return (
    <LinkBox>
      <a href={linkGithub} target="_blank" rel="noreferrer">
        <BsGithub size="3rem" color="#FFF" />
      </a>
      {linkWeb && (
        <a href={linkWeb} target="_blank" rel="noreferrer">
          <BsLink size="3rem" color="#FFF" />
        </a>
      )}
    </LinkBox>
  );
};

export default ProjectLinks;
