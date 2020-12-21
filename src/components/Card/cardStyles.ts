import styled from 'styled-components';

export const Container = styled.main`
  min-height: 250px;
  width: 80%;

  margin-bottom: 4rem;
  padding: 1.8rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: #f3f3f3;
  border-radius: 1.5rem;
  box-shadow: 0 0 0.3rem #000;

  @media (min-width: 1100px) {
    height: 200px;
    width: 800px;
  }
`;

export const DivText = styled.div`
  /* width: 100%; */
  /*
  display: flex;
  flex-direction: column;
  align-items: flex-start; */
`;

export const Title = styled.h2`
  margin-bottom: 1rem;

  font-size: 2rem;
`;

export const Description = styled.p`
  max-width: 600px;

  margin-bottom: 1rem;

  font-weight: 500;

  color: #999;
`;

export const Link = styled.a`
  width: 100%;

  padding: 0.8rem 1rem;

  background-color: #f3f3f3;
  border-radius: 0.5rem;
  border: 1px solid #ccc;

  color: #000;
  text-decoration: none;

  @media (min-width: 800px) {
    width: 50%;
  }

  img {
    height: 12px;
    width: 12px;
  }
`;
