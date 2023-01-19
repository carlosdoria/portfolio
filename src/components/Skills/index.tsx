import React from 'react'
import * as S from './styles'

interface ISkill {
  color: string
  children: React.ReactNode
}

export const Skills = ({ children, color }: ISkill) => {
  return <S.Skill color={color}>{children}</S.Skill>
}
