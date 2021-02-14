import { Fade } from 'react-awesome-reveal'
import * as S from './styles'

const AboutSection = () => {

  return (
    <S.AboutSection id='about'>
      <Fade>
        <S.SectionTitle>
        Sobre mim
        </S.SectionTitle>
        <S.AboutContainer

        >
          <S.AboutDivImage>
            <S.AboutImage
              src='https://github.com/carlosdoria.png'
              alt='foto de perfil'
            />
          </S.AboutDivImage>

          <div>
            <S.AboutSubtitle>Sou Carlos</S.AboutSubtitle>
            <S.AboutText>
            Desenvolvedor Full Stack e advogado, focado no desenvolvimento de
            aplicações web com React e NodeJS.{' '}
            </S.AboutText>
            <S.AboutText>
            Em 2018 me tornei bacharel em Direito formado pelo Centro
            Universitário CESMAC, posteriormente iniciei minha carreira na
            advocacia, atuando como advogado previdenciarista, durante minha
            jornada desenvolvi diversas planilhas de cálculos em Excel, onde
            aprendi sobre funções e macros.{' '}
            </S.AboutText>
            <S.AboutText>
            No decorrer do desenvolvimentos das planilhas conheci o VBA - Visual
            Basic for Applications, que foi meu primeiro contato com uma
            linguagem de programação e nesse momento vi o imenso universo por
            trás da programação e assim percebi o prazer que tinha em
            desenvolver e solucionar problemas durante o desenvolvimento de
            aplicações.{' '}
            </S.AboutText>
            <S.AboutText>
            Por volta do segundo semestre deste ano tomei uma das decisões mais
            difíceis, que foi realizar minha transição de carreira, deixando a
            advocacia de lado para focar todo o meu tempo no estudo e
            desenvolvimento de aplicações web, com foco em HTML, CSS, JavaScritp
            e React. Desde então, venho me desafiando cada vez mais a aprender
            coisas novas e me aperfeiçoar como desenvolvedor.
            </S.AboutText>
          </div>
        </S.AboutContainer>
      </Fade>
    </S.AboutSection>
  )
}

export default AboutSection
