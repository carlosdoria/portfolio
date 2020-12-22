import * as S from './Works.styles';

interface ILinkImage {
  imageLink: string;
  imageDescription: string;
}

const Works = ({ imageLink, imageDescription }: ILinkImage) => {
  return (
    <S.Container>
      <S.WorkImage src={imageLink} alt={imageDescription} />
    </S.Container>
  );
};

export default Works;
