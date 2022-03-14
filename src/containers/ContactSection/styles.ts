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
  margin-top: 2rem;
  margin-bottom: 1rem;

  font-size: 1.5rem;
  text-align: center;

  @media screen and (${device.tabletM}) {
    margin-bottom: 2rem;

    font-size: 2rem;
  }

  @media screen and (${device.desktopS}) {
    font-size: 2rem;
  }
`

export const Form = styled.form`
  max-width: ${size.tabletS};
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  row-gap: .5rem;
`

export const Input = styled.input`
  width: 100%;

  padding: 1rem;

  border: none;
  ${borderRadios}
  outline: none;
`

export const TextArea = styled.textarea`
  width: 100%;

  padding: 1rem;

  color: #000;

  border: none;
  ${borderRadios}
  outline: none;
  resize: none;
`

export const InputButton = styled.input`
  width: 100%;

  padding: 0.75rem 2.5rem;

  display: block;

  font-size: 1.25rem;
  letter-spacing: 2px;
  color: #000;

  background: #fff;

  border: none;
  ${borderRadios}
  outline: none;

  cursor: pointer;

  transition: .5s;

  /* :hover {
    color: var(--first-color);
    background-color: #fff;

    border: 1px solid var(--first-color);

    box-shadow: 0 10px 36px rgba(1, 0, 0, 0.4);
  } */
`
