import styled from "styled-components";

const SkillsBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
  width: 100%;
`;

const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border: 2px solid var(--color-primary);
  border-radius: 4px;
  color: var(--color-primary);
  padding: 2rem;

  h3 {
    font-size: 1.5rem;
  }
`;

export { SkillsBox, SkillBox };
