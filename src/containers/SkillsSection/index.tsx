'use client'

import { Accordion } from './components/Accordion'

import * as S from './styles'

import { SKILLS_BACK, SKILLS_FRONT, SKILLS_STUDYING } from './constants'
import { Section } from 'components/Section'
import { SectionTitle } from 'components/SectionTitle'

export interface ISkill {
  name: string
  svg: JSX.Element
}

export const SkillsSection = () => {
  return (
    <Section id='skills'>
      <SectionTitle title='Skills e ferramentas' />

      <S.Content>
        <Accordion title='Front-end' list={SKILLS_FRONT} />

        <Accordion title='Back-end' list={SKILLS_BACK} />

        <Accordion title='Estudando' list={SKILLS_STUDYING} />
      </S.Content>
    </Section>
  )
}
