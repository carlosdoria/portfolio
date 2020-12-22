import { useState } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';

import Button from '../Button';

import * as S from './navbar.styles';

const Navbar: React.FC = () => {
  const [enableMenu, setEnableMenu] = useState(false);

  return (
    <S.Header>
      <S.Nav>
        <div>
          <Link href="#home">
            <S.Logo>Carlos Dória</S.Logo>
          </Link>
        </div>

        <S.ButtonsContainer activeMenu={enableMenu}>
          <S.NavList>
            <Button path="#home">Home</Button>
            <Button path="#about">Sobre</Button>
            <Button path="#skills">Skills</Button>
            <Button path="#works">Trabalhos</Button>
            <Button path="#">Contato</Button>
          </S.NavList>
        </S.ButtonsContainer>

        <S.IconMenu>
          <FiMenu onClick={() => setEnableMenu(!enableMenu)} />
        </S.IconMenu>
      </S.Nav>
    </S.Header>
  );
};

export default Navbar;
