import styled from 'styled-components';

export const Main = styled.main``;

export const Section = styled.section`
  height: calc(100vh - 3rem);
  row-gap: 1rem;
  max-width: 1024px;
  width: calc(100% - 2rem);

  margin-left: var(--mb-2);
  margin-right: var(--mb-2);

  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
`;

export const Data = styled.div`
  align-self: center;
`;

export const Title = styled.h1`
  margin-bottom: var(--mb-5);

  font-size: var(--big-font-size);
`;

export const Name = styled.span`
  color: var(--first-color);
`;

export const ContactLink = styled.a`
  display: inline-block;
  background-color: var(--first-color);
  color: #fff;
  padding: 0.75rem 2.5rem;
  font-weight: var(--font-semi);
  border-radius: 0.5rem;

  :hover {
    box-shadow: 0 10px 36px rgba(1, 0, 0, 0.4);
  }
`;

export const DivSocialMedias = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icon = styled.a`
  width: max-content;

  margin-bottom: var(--mb-2);

  font-size: 1.5rem;
  color: var(--second-color);

  :hover {
    color: var(--first-color);
  }
`;

export const DivImage = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 295px;
`;

export const Image = styled.img`
  border-radius: 9.3rem 7.5rem 9.3rem 5.6rem;
`;
