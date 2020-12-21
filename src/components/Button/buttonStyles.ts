import styled from 'styled-components';

export const Container = styled.li`
  margin-bottom: var(--mb-4);
`;

export const Link = styled.a`
  position: relative;
  color: #fff;
  cursor: pointer;

  :hover {
    position: relative;
  }

  :hover::after {
    position: absolute;
    left: 0;
    top: 2rem;
    content: '';

    height: 0.18rem;
    width: 100%;

    background-color: var(--first-color);
  }

  /* ::after {
    position: absolute;
    left: 0;
    top: 2rem;
    content: '';

    height: 0.18rem;
    width: 100%;

    background-color: var(--first-color);
  } */
`;
