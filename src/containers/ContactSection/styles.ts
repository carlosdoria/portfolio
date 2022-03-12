import { motion } from 'framer-motion'
import styled from 'styled-components'
import { device, size } from 'styles/breakpoints'

export const ContactSection = styled.section`
  min-height: 100vh;
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

export const ContactContainer = styled( motion.section )`
  max-width: ${size.desktopM};
  min-height: calc(100vh - var(--header-height));
  margin: 0 auto;
  padding: 0 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Form = styled.form`
  max-width: ${size.tabletS};
`

export const InputText = styled.input`
  width: 100%;

  margin-bottom: 1rem;

  padding: 1rem;

  border: none;
  border-radius: 0.5rem;
  outline: none;
`

export const InputEmail = styled.input`
  width: 100%;

  margin-bottom: 1rem;

  padding: 1rem;

  border: none;
  border-radius: 0.5rem;
  outline: none;
`

export const TextArea = styled.textarea`
  width: 100%;

  margin-bottom: 1rem;

  padding: 1rem;

  color: #000;

  border: none;
  border-radius: 0.5rem;
  outline: none;
`

export const InputButton = styled.input`
  width: 100%;
  margin: auto;

  padding: 0.75rem 2.5rem;

  display: block;

  font-size: 1.25rem;
  letter-spacing: 2px;
  color: #000;

  background: #fff;

  border: none;
  border-radius: 0.5rem;
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
