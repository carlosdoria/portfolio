'use client'

import { Section } from 'components'

import { GiCoffeeCup } from 'react-icons/gi'

import * as S from './styles'

export const HomeSection = () => {
  return (
    <Section id='home'>
      <S.Content>
        <div>
          <S.PresentationWrapper>
            <S.Text>Seja bem vindo, sou</S.Text>
            <S.Title>Carlos Dória</S.Title>
            <S.Subtitle>Desenvolvedor FullStack</S.Subtitle>
          </S.PresentationWrapper>

          <S.LinkWrapper>
            <S.CustomLink href='#skills'>Minhas Skills</S.CustomLink>
            <S.CustomLink href='#projects'>Meus projetos</S.CustomLink>
          </S.LinkWrapper>
        </div>

        <S.OthersWrapper>
          <GiCoffeeCup size={200} />
        </S.OthersWrapper>
      </S.Content>
    </Section>
  )
}
