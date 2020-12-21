import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  margin: 10rem auto 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  @media (min-width: 1000px) {
    width: 80%;
  }
`;

export const Title = styled.h1`
  margin-bottom: 4rem;

  display: flex;
  justify-content: center;

  font-size: 2.4rem;
  /* font-weight: bold; */
`;
