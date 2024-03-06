'use client'

import { SectionTitle } from 'components/SectionTitle'
import * as S from './styles'
import Image from 'next/image'
import { Section } from 'components/Section'

export const AboutMeSection = () => {
  return (
    <Section id='aboutMe'>
      <SectionTitle title='Sobre mim' />

      <S.Content>
        <S.AboutDivImage>
          <Image
            src='https://github.com/carlosdoria.png'
            alt='Foto de perfil'
            width={300}
            height={300}
          />
        </S.AboutDivImage>

        <S.TextWrapper>
          <p>
            Desenvolvedor Full-stack, graduado em direito. Apaixonado por
            tecnologia e resolver problemas através da programação, atualmente
            focado no desenvolvimento de aplicações web utilizando a stack
            JavaScript ( ReactJS, NextJS e React Native ).
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
