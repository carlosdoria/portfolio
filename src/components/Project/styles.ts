import styled from 'styled-components'

export const Project = styled.div`
  padding: 2.4rem;

  overflow: hidden;

  color: ${({ theme }) => theme.colors.primary};

  border-radius: 3.2rem;

  -webkit-box-shadow: 0px 0px 12px rgba(98, 98, 98, 0.3);
  -moz-box-shadow: 0px 0px 12px rgba(98, 98, 98, 0.3);
  box-shadow: 0px 0px 12px rgba(98, 98, 98, 0.3);

  img {
    min-height: 150px;
    max-height: 200px;

    margin-bottom: 1.2rem;

    border-radius: 1.2rem;
  }

  h4 {
    margin-bottom: 0.5rem;

    font-size: 2.4rem;
    line-height: 3.2rem;
  }

  p {
    margin-bottom: 1.6rem;

    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`

export const Content = styled.div``

export const Footer = styled.div`
  display: flex;
  gap: 1.2rem;

  a {
    padding: 0.6rem 1.2rem;

    display: flex;
    flex-direction: row;

    font-size: 1.4rem;

    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 16px;
  }

  svg {
    margin-left: 8px;
  }
`
