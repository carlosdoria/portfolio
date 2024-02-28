import { ReactNode } from 'react'
import * as S from './styles'

export interface ISkill {
  icon: ReactNode
  text: string
}

export const Skill = ({ icon, text }: ISkill) => {
  return (
    <S.Skill>
      {icon}
      <S.Text>{text}</S.Text>
    </S.Skill>
  )
}
