import Link from 'next/link'
import { useContext } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { ThemeContext } from 'styled-components'

import * as S from './styles'

interface HeaderProps {
  toggleTheme?: () => void
}

export const Header = ({ toggleTheme }: HeaderProps) => {
  const { title } = useContext(ThemeContext)

  return (
    <S.Header
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.3,
          duration: 0.5
        }
      }}
    >
      <S.Nav>
        <Link href='/'>
          <S.Logo>Carlos Dória</S.Logo>
        </Link>

        <S.Button onClick={toggleTheme}>
          {title === 'light' ? (
            <FiSun color='black' size={24} />
          ) : (
            <FiMoon color='white' size={24} />
          )}
        </S.Button>
      </S.Nav>
    </S.Header>
  )
}
