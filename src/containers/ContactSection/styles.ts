import { motion } from 'framer-motion'
import styled from 'styled-components'
import { device, size } from 'styles/breakpoints'

const borderRadios = `
  border-radius: 0.25rem;
`

export const ContactSection = styled( motion.section )`
  max-width: ${size.desktopM};
  margin: 0 auto 3rem;
  padding: 0 16px;
`

export const SectionTitle = styled.h2`
  margin: 2rem 0 1rem;

  font-size: 2rem;
  text-align: center;

  @media screen and (${device.tabletM}) {
    margin-bottom: 2rem;

    font-size: 2.5rem;
  }
`

export const Form = styled.form`
  max-width: ${size.tabletS};
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`

export const Field = styled.div`
  label {
    margin-left: .25rem;
    font-weight: bold;
  }

  input, textarea {
    width: 100%;
    margin-top: .5rem;
    padding: .75rem;

    font-size: .875rem;

    border: none;
    ${borderRadios}
    outline: none;
  }

  textarea {
    color: #000;

    resize: none;
  }
`

export const InputButton = styled.input`
  width: 100%;

  padding: 0.75rem 2.5rem;

  font-size: 1.25rem;
  letter-spacing: 2px;
  color: #000;

  background: #fff;

  border: none;
  ${borderRadios}
  outline: none;

  cursor: pointer;

  transition: .5s;

  @media screen and (${device.mobileL}) {
    max-width: 200px;
    align-self: end;
  }


  /* :hover {
    color: ${props => props.theme.colors.primary};
    background-color: #fff;

    border: 1px solid var(--first-color);

    box-shadow: 0 10px 36px rgba(1, 0, 0, 0.4);
  } */
`
