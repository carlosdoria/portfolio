'use client'

import { Section } from 'components'
import { SectionTitle } from 'components/SectionTitle'
import * as S from './styles'

export const AboutMeSection = () => {
  return (
    <Section id='aboutMe'>
      <SectionTitle title='Sobre mim' />

      <S.Content>
        <S.AboutDivImage>
          <img src='https://github.com/carlosdoria.png' alt='Foto de perfil' />
        </S.AboutDivImage>

        <S.TextWrapper>
          <p>
            Desenvolvedor Full-stack, graduado em direito e atualmente cursando
            Engenharia de Software. Fiz minha transição de carreira por amar
            tecnologia e ser apaixonado por resolver problemas através da
            programação, atualmente focado no desenvolvimento de aplicações web
            utilizando a stack JavaScript ( ReactJS, NextJS, React Native e
            NodeJS ).
          </p>
          <p>
            Criador de conteúdo no Youtube, onde faço lives em pair programming
            com um amigo de longa data, em nossas lives buscamos ensinar
            programação na prática, com muita didática e de forma divertida.
          </p>
        </S.TextWrapper>
      </S.Content>
    </Section>
  )
}
