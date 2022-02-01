import CupCoffee from 'components/CupCoffee'
import Link from 'next/link'
import { FaGithubAlt, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import * as S from './styles'

export default function HomeSectoion () {

  return (
    <S.HomeSection id="home">
      <div>
        <p>Olá, me chamou</p>
        <h1>Carlos Dória</h1>
        <h2>Desenvolvedor FullStack</h2>
      </div>

      <div>
        <button>Download CV</button>
        <button>Sobre mim</button>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'end'
      }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Link
            href="https://www.linkedin.com/in/carlos-d%C3%B3ria-877122199/"
            // target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/carlosdoria"
            // target="_blank"
          >
            <FaGithubAlt />
          </Link>
          <Link
            href="https://www.instagram.com/carlosc.doria/"
            // target="_blank"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=5582988970954"
            // target="_blank"
          >
            <FaWhatsapp />
          </Link>
        </div>
        {/* <CupCoffee /> */}
        <div>a</div>
      </div>
    </S.HomeSection>
  )
}
