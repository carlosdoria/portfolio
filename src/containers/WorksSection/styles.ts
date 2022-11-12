import styled from 'styled-components'

export const SectionTitle = styled.h2`
  position: relative;
  color: ${props => props.theme.colors.primary};
  margin-top: var(--mb-3);
  margin-bottom: var(--mb-4);
  text-align: center;

  :after {
    position: absolute;
    content: '';
    width: 64px;
    height: 0.18rem;
    left: 0;
    right: 0;
    margin: auto;
    top: 2.4rem;
    background-color: ${props => props.theme.colors.primary};
  }
  @media screen and (min-width: 600px) {
    margin-bottom: var(--mb-6);

    :after {
      width: 100px;
      top: 3.2rem;
    }
  }
`

export const WorksSection = styled.section`
  min-height: 100vh;
`

export const WorksContainer = styled.div`
  width: calc(100% - 2rem);
  max-width: 1024px;

  margin-left: var(--mb-2);
  margin-right: var(--mb-2);

  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
  row-gap: 2rem;


  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 2rem;
  }

  @media screen and (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`
