import * as S from './button.styles';

interface Text {
  children: string;
  path: string;
}

const Button = ({ children, path }: Text) => {
  return (
    <S.Container>
      <S.NavLink href={path}>{children}</S.NavLink>
    </S.Container>
  );
};

export default Button;
