import FlamengoLogo from '../../assets/flamengo.png'
import SmokeVideo from '../../assets/smoke-background2.mp4'
import Poster from '../../assets/poster.png'

import { HeaderContainer, LogoContainer, Scratch } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={FlamengoLogo} alt="Flamengo Rowing Shield" />
      </LogoContainer>
      <video playsInline autoPlay loop muted preload="none" poster={Poster}>
        <source src={SmokeVideo} type="video/mp4" />
      </video>
      <Scratch />
      <h1>Flamengo</h1>
      <Scratch bottom={true} />
      <h2>
        Conheça as principais glórias do Flamengo ao longo de mais um século de
        história
      </h2>
    </HeaderContainer>
  )
}
