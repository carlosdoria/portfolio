'use client'

import * as S from './styles'
import { GoArrowUpRight } from 'react-icons/go'

import { Section } from 'components/Section'
import Image from 'next/image'

export const HomeSection = () => {
  return (
    <Section id='home'>
      <S.Content>
        <div>
          <S.PresentationWrapper>
            <S.Text>Seja bem vindo, sou</S.Text>
            <S.Title>
              Carlos Dória
              <S.Subtitle>Desenvolvedor FullStack</S.Subtitle>
            </S.Title>
          </S.PresentationWrapper>

          <S.LinkWrapper>
            <S.CustomLink href='#skills'>
              Minhas Skills <GoArrowUpRight size={22} />
            </S.CustomLink>
            <S.CustomLink href='#projects'>
              Meus projetos <GoArrowUpRight size={22} />
            </S.CustomLink>
          </S.LinkWrapper>
        </div>

        <S.OthersWrapper>
          <Image src='/img/rocket.gif' alt='' width={300} height={300} />
        </S.OthersWrapper>
      </S.Content>
    </Section>
  )
}
