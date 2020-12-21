import * as S from './button.styles';

interface Text {
  children: string;
  path: string;
}

const Button = ({ children, path }: Text) => {
  return (
    <S.Container>
      <S.Link href={path}>{children}</S.Link>
    </S.Container>
  );
};

export default Button;
