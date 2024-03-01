import styled from 'styled-components'

export const Project = styled.div`
  /* padding: 1.6rem; */

  overflow: hidden;

  color: ${({ theme }) => theme.colors.primary};

  border-radius: 1.6rem;

  -webkit-box-shadow: 0px 0px 12px rgba(98, 98, 98, 0.3);
  -moz-box-shadow: 0px 0px 12px rgba(98, 98, 98, 0.3);
  box-shadow: 0px 0px 12px rgba(98, 98, 98, 0.3);

  img {
    min-height: 150px;
    max-height: 200px;

    border-radius: 1.2rem 1.2rem 0 0;
  }

  p {
  }
`

export const Title = styled.h4`
  margin-bottom: 0.5rem;

  font-size: 2.4rem;
  line-height: 3.2rem;
`

export const Subtitle = styled.p`
  margin-bottom: 1.6rem;

  font-size: 1.6rem;
  line-height: 2.4rem;
`

export const Content = styled.div`
  padding: 1.6rem;
`

export const Footer = styled.div`
  display: flex;
  gap: 1.2rem;

  a {
    padding: 0.6rem 1.2rem;

    display: flex;
    flex-direction: row;

    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primary};

    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 16px;
  }

  svg {
    margin-left: 8px;
  }
`
