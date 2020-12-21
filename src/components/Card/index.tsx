import { cardInfos } from '../../pages/api/interfaces';

import * as S from './cardStyles';

const Card = ({ title, description, url }: cardInfos) => {
  return (
    <S.Container>
      <S.DivText>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.DivText>
      <S.Link href={url} target="_blank" rel="noreferrer">
        Acessar repositório{' '}
        <img src="https://www.flaticon.com/svg/static/icons/svg/376/376007.svg" />
      </S.Link>
    </S.Container>
  );
};

export default Card;
