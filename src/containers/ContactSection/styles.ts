import { motion } from 'framer-motion'
import styled from 'styled-components'
import { device, size } from 'styles/breakpoints'

const borderRadios = `
  border-radius: 4px;
`

export const Content = styled.div`
  max-width: ${size.tabletS};
  margin: 0 auto;
  padding: 0 16px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
`

export const Field = styled.div`
  label {
    margin-left: 0.25rem;
    font-size: 1.6rem;
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
    margin-top: 0.8rem;
    padding: 1.2rem;

    font-size: 1.6rem;

    border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
    ${borderRadios}
    outline: none;
    background: ${({ theme }) => theme.colors.white};
  }

  textarea {
    color: #000;

    resize: none;
  }
`

export const InputButton = styled.input`
  width: 100%;

  padding: 1.2rem 0;

  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: #000;

  background: ${({ theme }) => theme.colors.white};

  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  ${borderRadios}
  outline: none;

  cursor: pointer;

  transition: 0.5s;

  @media screen and (${device.mobileL}) {
    max-width: 200px;
    align-self: end;
  }

  /* :hover {
    color: ${(props) => props.theme.colors.primary};
    background-color: #fff;

    border: 1px solid var(--first-color);

    box-shadow: 0 10px 36px rgba(1, 0, 0, 0.4);
  } */
`
