import { useState } from 'react'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'

import * as S from './styles'

export const Navbar: React.FC = () => {
  const [ enableMenu, setEnableMenu ] = useState( false )

  return (
    <S.Header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: .3, duration: .5 } }}
      // transition={{
      //   type: 'spring',
      //   stiffness: 260,
      //   damping: 20
      // }}
    >
      <S.Nav>
        <div>
          <Link href="#home">
            <S.Logo>Carlos Dória</S.Logo>
          </Link>
        </div>

        <S.NavMenu activeMenu={enableMenu}>
          <S.NavList>
            <S.NavContainer>
              <S.NavLink
                href="#home"
                onClick={e => {
                  setEnableMenu( false ), console.log( e )
                }}>
                Home
              </S.NavLink>
            </S.NavContainer>
            <S.NavContainer>
              <S.NavLink href="#about" onClick={() => setEnableMenu( false )}>
                Sobre
              </S.NavLink>
            </S.NavContainer>
            <S.NavContainer>
              <S.NavLink href="#skills" onClick={() => setEnableMenu( false )}>
                Skills
              </S.NavLink>
            </S.NavContainer>
            <S.NavContainer>
              <S.NavLink href="#works" onClick={() => setEnableMenu( false )}>
                Trabalhos
              </S.NavLink>
            </S.NavContainer>
            <S.NavContainer>
              <S.NavLink href="#contact" onClick={() => setEnableMenu( false )}>
                Contato
              </S.NavLink>
            </S.NavContainer>
          </S.NavList>
        </S.NavMenu>

        <S.IconMenu>
          <FiMenu onClick={() => setEnableMenu( !enableMenu )} />
        </S.IconMenu>
      </S.Nav>
    </S.Header>
  )
}

